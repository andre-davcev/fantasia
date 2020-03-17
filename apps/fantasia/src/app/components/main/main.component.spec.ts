import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';

import { StateApp, ModuleComponentMain, ComponentMain } from '@fantasia/app';

describe('ComponentMain', () => {
  let spectator: Spectator<ComponentMain>;

  const createComponent = createTestComponentFactory({
    component: ComponentMain,
    imports: [
      RouterTestingModule,
      ModuleComponentMain,
      NgxsModule.forRoot([StateApp]),
      TranslateModule.forRoot(),
      NoopAnimationsModule
    ],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
