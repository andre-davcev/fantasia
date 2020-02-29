import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Spectator, createTestComponentFactory, createService, SpectatorService } from '@netbasal/spectator/jest';

import {
  ServiceApp,
  AppList,
  StateApp,
  ActionAppLoad,
  StateAppOptions,
  ActionAppNavToChild,
  AppProperties,
  ComponentMenuItem,
  ModuleMenuItem
} from '@fantasia/app';

describe('ComponentMenuItem', () => {
  const store: SpectatorService<Store> = createService<Store>(Store);
  const app: SpectatorService<ServiceApp> = createService<ServiceApp>(ServiceApp);

  let spectator: Spectator<ComponentMenuItem>;
  let element: HTMLElement;

  const createComponent = createTestComponentFactory<ComponentMenuItem>({
    component: ComponentMenuItem,
    imports: [
      ModuleMenuItem,
      RouterTestingModule,
      NgxsModule.forRoot([StateApp]),
      TranslateModule.forRoot(),
      NoopAnimationsModule
    ],
    declareComponent: false
  });

  beforeEach(async(() => {
    store.service.reset({[StateApp.name]: StateAppOptions.defaults});
    store.service.dispatch(new ActionAppLoad(AppList));

    spectator = createComponent();
    spectator.component.app = ServiceApp.toArray(app.service.generateLookup(AppList))[0];
    spectator.fixture.detectChanges();

    element = spectator.debugElement.query(By.css('.cpt-link')).nativeElement;
  }));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render menu item', () => {
    const properties: AppProperties = spectator.component.app;
    const avatar: HTMLImageElement = spectator.debugElement.query(By.css('.cpt-avatar')).nativeElement;
    const header: HTMLElement = spectator.debugElement.query(By.css('.cpt-header')).nativeElement;
    const description: HTMLElement = spectator.debugElement.query(By.css('.cpt-description')).nativeElement;

    expect(avatar.alt).toBe(properties.display);
    expect(avatar.src.includes(properties.icon)).toBe(true);
    expect(header.textContent).toBe(properties.display);
    expect(description.textContent).toBe(properties.description);
  });

  it('should call mouse over', () => {
    element.dispatchEvent(new MouseEvent('mouseover', { view: window, bubbles: true, cancelable: true }));

    expect(spectator.component.animation).toBe('hover');
  });

  it('should call mouse leave', () => {
    element.dispatchEvent(new MouseEvent('mouseover', { view: window, bubbles: true, cancelable: true }));
    element.dispatchEvent(new MouseEvent('mouseleave', { view: window, bubbles: true, cancelable: true }));

    expect(spectator.component.animation).toBe('default');
  });

  it('should navigate on click', () => {
    jest.spyOn(store.service, 'dispatch');
    element.dispatchEvent(new MouseEvent('click', { view: window, bubbles: true, cancelable: true }));

    expect(store.service.dispatch).toBeCalledWith(new ActionAppNavToChild(spectator.component.app.key));
  });
});
