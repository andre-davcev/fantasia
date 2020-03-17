import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  createTestComponentFactory,
  Spectator,
  SpectatorService,
  SpectatorServiceFactory,
  createServiceFactory
} from '@ngneat/spectator/jest';

import {
  AppList,
  StateApp,
  ActionAppLoad,
  StateAppOptions,
  App,
  ComponentMenu,
  ModuleComponentMenu,
  MaterialBreakpoint,
  ActionAppNavToHome,
  ActionAppNavToChild,
  StateAppModel
} from '@fantasia/app';

describe('ComponentMenu', () => {
  let store: SpectatorService<Store>;
  const createStore: SpectatorServiceFactory<Store> = createServiceFactory<
    Store
  >(Store);

  let spectator: Spectator<ComponentMenu>;

  const createComponent = createTestComponentFactory<ComponentMenu>({
    component: ComponentMenu,
    imports: [
      ModuleComponentMenu,
      RouterTestingModule,
      NgxsModule.forRoot([StateApp]),
      TranslateModule.forRoot(),
      NoopAnimationsModule
    ],
    declareComponent: false
  });

  beforeEach(() => {
    store = createStore();
    store.service.reset({ [StateApp.name]: StateAppOptions.defaults });
    store.service.dispatch(new ActionAppLoad(AppList));

    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create grid', async(() => {
    store.service.dispatch(new ActionAppNavToHome());
    const breakpoint: MaterialBreakpoint = MaterialBreakpoint.Large;
    Object.defineProperty(spectator.component, 'breakpoint$', {
      value: of(breakpoint)
    });

    spectator.component.ngOnInit();
    spectator.fixture.whenStable().then(() => {
      spectator.fixture.detectChanges();

      const grid: HTMLElement = spectator.debugElement.query(
        By.css('mat-grid-list')
      ).nativeElement;
      const tiles: Array<DebugElement> = spectator.debugElement.queryAll(
        By.css('mat-grid-tile')
      );

      expect(grid.classList.contains(`cpt-${breakpoint}`)).toBe(true);
      expect(tiles.length).toBe(AppList.length);

      spectator.component.columns$
        .pipe(take(1))
        .subscribe((columns: number) => {
          expect(grid.getAttribute('ng-reflect-cols')).toBe(
            `${spectator.component.breakpointColumns[breakpoint]}`
          );
          expect(columns).toBe(
            spectator.component.breakpointColumns[breakpoint]
          );
        });
    });
  }));

  it('should have 1 column', async(() => {
    store.service.dispatch(new ActionAppNavToChild(App.Books));
    const breakpoint: MaterialBreakpoint = MaterialBreakpoint.Large;
    Object.defineProperty(spectator.component, 'breakpoint$', {
      value: of(breakpoint)
    });
    spectator.component.ngOnInit();

    spectator.fixture.whenStable().then(() => {
      spectator.fixture.detectChanges();

      spectator.component.columns$
        .pipe(take(1))
        .subscribe((columns: number) => {
          expect(columns).toBe(1);
        });
    });
  }));

  it('should navigate home', async(() => {
    store.service.dispatch(new ActionAppNavToChild(App.Books));
    spectator.fixture.detectChanges();

    spectator.component.home();
    spectator.fixture.detectChanges();

    store.service
      .selectOnce((state: any) => state[StateAppOptions.name as string])
      .subscribe((state: StateAppModel) => {
        expect(StateApp.home(state)).toBe(true);
      });
  }));
});
