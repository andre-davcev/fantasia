import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { ModulePageBooks, PageBooks } from '@fantasia/app';

describe('PageBooks', () => {
  let spectator: Spectator<PageBooks>;

  const createComponent = createTestComponentFactory({
    component: PageBooks,
    imports: [
      RouterTestingModule,
      ModulePageBooks
    ],
    declareComponent: false
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
