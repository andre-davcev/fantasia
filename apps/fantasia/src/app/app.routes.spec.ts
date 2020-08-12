import { Route } from '@angular/router';

import { RoutesApp } from './app.routes';
import { App } from './enums';
import { ModuleComponentMain } from './components';
import { ModulePageResume, ModulePageStarcraft } from './pages';

describe('RoutesApp', () => {
  it('should set route modules', () => {
    const routeRoot: Route = RoutesApp.find(
      (route: Route) => route.path === App.Root
    );
    const routeResume: Route = RoutesApp.find(
      (route: Route) => route.path === App.Resume
    );
    const routeStarcraft: Route = RoutesApp.find(
      (route: Route) => route.path === App.Starcraft
    );

    expect((routeRoot.loadChildren as any)()).toBe(ModuleComponentMain);
    expect((routeResume.loadChildren as any)()).toBe(ModulePageResume);
    expect((routeStarcraft.loadChildren as any)()).toBe(ModulePageStarcraft);
  });
});
