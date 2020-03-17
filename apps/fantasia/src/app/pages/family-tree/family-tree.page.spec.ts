import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { ModulePageFamilyTree, PageFamilyTree } from '@fantasia/app';

describe('PageFamilyTree', () => {
  let spectator: Spectator<PageFamilyTree>;

  const createComponent = createTestComponentFactory({
    component: PageFamilyTree,
    imports: [RouterTestingModule, ModulePageFamilyTree],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
