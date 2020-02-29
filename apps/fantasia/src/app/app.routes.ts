import { Routes } from '@angular/router';

import { App } from '@fantasia/app/enums';
import {
  ModuleComponentMain,
  ModulePageResume,
  ModulePageFamilyTree,
  ModulePagePhotos,
  ModulePageStarcraft,
  ModulePageBooks,
  ModulePageMovies
} from '@fantasia/app';

export const RoutesApp: Routes = [
// { path: '**', component: ErrorComponent }
  {
    path: App.Root,
    loadChildren: () => ModuleComponentMain
  },
  {
    path: App.Resume,
    loadChildren: () => ModulePageResume
  },
  {
    path: App.FamilyTree,
    loadChildren: () => ModulePageFamilyTree
  },
  {
    path: App.Photos,
    loadChildren: () => ModulePagePhotos
  },
  {
    path: App.Starcraft,
    loadChildren: () => ModulePageStarcraft
  },
  {
    path: App.Books,
    loadChildren: () => ModulePageBooks
  },
  {
    path: App.Movies,
    loadChildren: () => ModulePageMovies
  }
];
