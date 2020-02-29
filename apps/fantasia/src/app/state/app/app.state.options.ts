import { StoreOptions } from '@ngxs/store/src/symbols';

import { StateAppModel } from './app.state.model';
import { MediaChange } from '@angular/flex-layout';
import { MaterialBreakpoint } from '@fantasia/app/enums/material-breakpoint.enum';

export const StateAppOptions: StoreOptions<StateAppModel> = {
  name: 'app',

  defaults: {
    home: true,
    apps: {},
    loading: false,
    stateName: 'init',
    mediaChanges: []
  }
};
