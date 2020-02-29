import { AppProperties } from '@fantasia/app/models';
import { MediaChange } from '@angular/flex-layout';

export interface StateAppModel {
  home: boolean;
  apps: Record<string, AppProperties>;
  loading: boolean;
  stateName: string;
  mediaChanges: Array<MediaChange>;
}
