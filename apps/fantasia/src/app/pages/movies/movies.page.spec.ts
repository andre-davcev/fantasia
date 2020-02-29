import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { ModulePageMovies, PageMovies } from '@fantasia/app';

describe('PageMovies', () => {
  let spectator: Spectator<PageMovies>;

  const createComponent = createTestComponentFactory({
    component: PageMovies,
    imports: [
      RouterTestingModule,
      ModulePageMovies
    ],
    declareComponent: false
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

