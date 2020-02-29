import { Route } from '@angular/router';

import { RoutesApp } from './app.routes';
import { App } from './enums';
import { ModuleComponentMain } from './components';
import { ModulePageResume, ModulePageFamilyTree, ModulePagePhotos, ModulePageStarcraft, ModulePageBooks, ModulePageMovies } from './pages';


describe('RoutesApp', () => {
  it('should set route modules', () => {
    const routeRoot:   Route = RoutesApp.find((route: Route) => route.path === App.Root);
    const routeResume: Route = RoutesApp.find((route: Route) => route.path === App.Resume);
    const routeFamilyTree: Route = RoutesApp.find((route: Route) => route.path === App.FamilyTree);
    const routePhotos: Route = RoutesApp.find((route: Route) => route.path === App.Photos);
    const routeStarcraft: Route = RoutesApp.find((route: Route) => route.path === App.Starcraft);
    const routeBooks: Route = RoutesApp.find((route: Route) => route.path === App.Books);
    const routeMovies: Route = RoutesApp.find((route: Route) => route.path === App.Movies);

    expect((routeRoot.loadChildren as any)()).toBe(ModuleComponentMain);
    expect((routeResume.loadChildren as any)()).toBe(ModulePageResume);
    expect((routeFamilyTree.loadChildren as any)()).toBe(ModulePageFamilyTree);
    expect((routePhotos.loadChildren as any)()).toBe(ModulePagePhotos);
    expect((routeStarcraft.loadChildren as any)()).toBe(ModulePageStarcraft);
    expect((routeBooks.loadChildren as any)()).toBe(ModulePageBooks);
    expect((routeMovies.loadChildren as any)()).toBe(ModulePageMovies);
  });
});

