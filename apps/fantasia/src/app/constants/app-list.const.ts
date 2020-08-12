import { AppProperties } from '../models';
import { App } from '../enums';

export const AppList: Array<AppProperties> = [
  { key: App.Resume },
  { key: App.Firefly, link: 'https://firefly.im' },
  { key: App.Starcraft },
  { key: App.Movies, link: 'https://letterboxd.com/helaku/lists/by/name' }
];
