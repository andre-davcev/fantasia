import { Routes } from '@angular/router';

import { App } from '@fantasia/app/enums';
import {
  ModuleComponentMain,
  ModulePageResume,
  ModulePageStarcraft,
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
    path: App.Starcraft,
    loadChildren: () => ModulePageStarcraft
  },
  {
    path: App.Movies,
    loadChildren: () => ModulePageMovies
  }
];
