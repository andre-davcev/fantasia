import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { ModulePagePhotos, PagePhotos } from '@fantasia/app';

describe('PagePhotos', () => {
  let spectator: Spectator<PagePhotos>;

  const createComponent = createTestComponentFactory({
    component: PagePhotos,
    imports: [
      RouterTestingModule,
      ModulePagePhotos
    ],
    declareComponent: false
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

