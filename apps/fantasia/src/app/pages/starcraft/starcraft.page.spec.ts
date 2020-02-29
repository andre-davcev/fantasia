import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { ModulePageStarcraft, PageStarcraft } from '@fantasia/app';

describe('PageStarcraft', () => {
  let spectator: Spectator<PageStarcraft>;

  const createComponent = createTestComponentFactory({
    component: PageStarcraft,
    imports: [
      RouterTestingModule,
      ModulePageStarcraft
    ],
    declareComponent: false
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

