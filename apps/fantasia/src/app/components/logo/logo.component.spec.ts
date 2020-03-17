import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { Animation, ComponentLogo, ModuleComponentLogo } from '@fantasia/app';

describe('LogoComponent', () => {
  let spectator: Spectator<ComponentLogo>;

  const createComponent = createTestComponentFactory({
    component: ComponentLogo,
    imports: [ModuleComponentLogo, NoopAnimationsModule],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.component.animation).toBe(Animation.Default);
  });

  it('should test mouse hover', () => {
    spectator.component.mouseover();
    spectator.fixture.detectChanges();

    expect(spectator.component.animation).toBe(Animation.Hover);
  });

  it('should test mouse leave', () => {
    spectator.component.mouseover();
    spectator.fixture.detectChanges();

    spectator.component.mouseleave();
    spectator.fixture.detectChanges();

    expect(spectator.component.animation).toBe(Animation.Default);
  });
});
