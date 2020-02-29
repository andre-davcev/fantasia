import { Store, NgxsModule } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AppList } from '@fantasia/app/constants';
import { AppProperties } from '@fantasia/app/models';

import { StateApp } from './app.state';
import { StateAppOptions } from './app.state.options';
import { ActionAppLoad, ActionAppNavToHome, ActionAppNavToChild, ActionAppWatchMediaBreakpoints } from './app.actions';
import { StateAppModel } from './app.state.model';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { App } from '@fantasia/app';
import { MediaObserver } from '@angular/flex-layout';
import { MaterialBreakpoint } from '@fantasia/app/enums';
import { of } from 'rxjs';
import { RoutesApp } from '@fantasia/app/app.routes';
import { SpectatorService, createService } from '@netbasal/spectator/jest';
​
describe('StateApp', () => {
  const store: SpectatorService<Store> = createService<Store>(Store);

  let router: Router;

  class MockMediaObserver {
    isActive(mqAlias: string) {
      return mqAlias === MaterialBreakpoint.ExtraLarge;
    }

    asObservable() {
      return of([{ mqAlias: MaterialBreakpoint.ExtraSmall }]);
    }
  }
​
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(RoutesApp),
        NgxsModule.forRoot([StateApp]),
        NgxsRouterPluginModule.forRoot()
      ],
      providers: [
        { provide: MediaObserver, useClass: MockMediaObserver },
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    store.service.reset({[StateAppOptions.name]: StateAppOptions.defaults});
  }));

  it('should load app data', async(() => {
    store.service.dispatch(new ActionAppLoad(AppList));

    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      const original: AppProperties = AppList[0];
      const apps: Array<AppProperties> = StateApp.apps(state);
      const app: AppProperties = apps[0];

      expect(apps.length).toBe(AppList.length);
      expect(app.key).toBe(original.key);
      expect(app.link).toBe(original.link);
      expect(app.order).toBe(0);
      expect(app.iconExtension).toBe(original.iconExtension);
      expect(app.display).toBe(`app.${app.key}.title`);
      expect(app.description).toBe(`app.${app.key}.description`);
      expect(app.icon).toBe(`assets/icons/128/${app.key}.png`);
    });
  }));

  it('should navigate to home route', async(() => {
    store.service.reset({
      [StateAppOptions.name]: {
        ...StateAppOptions.defaults,
        home: false
      }
    });

    jest.spyOn(router, 'navigate');

    store.service.dispatch([
      new ActionAppLoad(AppList),
      new ActionAppNavToHome()
    ]);

    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      expect(StateApp.home(state)).toBe(true);
      expect(StateApp.loading(state)).toBe(true);
      expect(router.navigate).toBeCalledWith(['/'], { queryParams: undefined });
    });
  }));

  it('should navigate to child route', async(() => {
    jest.spyOn(router, 'navigate');

    store.service.dispatch([
      new ActionAppLoad(AppList),
      new ActionAppNavToChild(App.Resume)
    ]);

    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      expect(StateApp.home(state)).toBe(false);
      expect(StateApp.loading(state)).toBe(true);
      expect(router.navigate).toBeCalledWith([App.Resume], { queryParams: undefined });
    });
  }));


  it('should open window tab', async(() => {
    jest.spyOn(window, 'open');

    store.service.dispatch([
      new ActionAppLoad(AppList),
      new ActionAppNavToChild(App.Blog)
    ]);

    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      expect(StateApp.home(state)).toBe(true);
      expect(window.open).toBeCalledWith(StateApp.appLookup(state)[App.Blog].link)
    });
  }));

  it('should default breakpoint state', async(() => {
    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      expect(StateApp.mediaBreakpoint(state)).toBeFalsy();
    });
  }));

  it('should change breakpoint alias', async(() => {
    store.service.dispatch(new ActionAppWatchMediaBreakpoints());

    store.service.selectOnce((state: any) => state[StateAppOptions.name]).
    subscribe((state: StateAppModel) => {
      expect(StateApp.mediaBreakpoint(state)).toBe(MaterialBreakpoint.ExtraSmall);
    });
  }));
});
