import { AppProperties } from '../models';
import { App } from '../enums';

export const AppList: Array<AppProperties> = [
  { key: App.Blog, link: 'https://medium.com/@andre.davcev' },
  { key: App.Resume },
  { key: App.Firefly, link: 'https://firefly.im' },
  { key: App.Starcraft },
  // { key: App.FamilyTree },
  { key: App.Photos },
  // { key: App.Books },
  { key: App.Movies }
];
