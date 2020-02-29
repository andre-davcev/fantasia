import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { ModulePageResume, PageResume } from '@fantasia/app';

describe('PageResume', () => {
  let spectator: Spectator<PageResume>;

  const createComponent = createTestComponentFactory({
    component: PageResume,
    imports: [
      RouterTestingModule,
      ModulePageResume
    ],
    declareComponent: false
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

