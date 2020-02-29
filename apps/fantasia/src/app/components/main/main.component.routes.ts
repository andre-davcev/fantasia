import { Routes } from '@angular/router';

import { ComponentMain } from './main.component';
import { App } from '@fantasia/app/enums';

export const ComponentMainRoutes: Routes = [
  { path: App.Root, redirectTo: App.Home, pathMatch: 'full' },
  { path: App.Home, component: ComponentMain }
];
