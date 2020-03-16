import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppProperties } from '@fantasia/app/models';
import { StateApp, ActionAppNavToHome } from '@fantasia/app/state';
import { MaterialBreakpoint } from '@fantasia/app/enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class ComponentMenu implements OnInit {
  @Select(StateApp.apps) apps$: Observable<Array<AppProperties>>;
  @Select(StateApp.home) home$: Observable<boolean>;
  @Select(StateApp.mediaBreakpoint) breakpoint$: Observable<MaterialBreakpoint>;

  public breakpointColumns: Record<string, number> = {
    [MaterialBreakpoint.ExtraSmall]: 1,
    [MaterialBreakpoint.Small]: 2,
    [MaterialBreakpoint.Medium]: 3,
    [MaterialBreakpoint.Large]: 4,
    [MaterialBreakpoint.ExtraLarge]: 4
  };

  public columns$: Observable<number>;
  public gridClass$: Observable<string>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.columns$ = combineLatest([this.breakpoint$, this.home$]).pipe(
      map(([breakpoint, home]) =>
        home ? this.breakpointColumns[breakpoint] : 1
      )
    );

    this.gridClass$ = this.breakpoint$.pipe(
      map((breakpoint: MaterialBreakpoint) => `cpt-${breakpoint}`)
    );
  }

  public home(): void {
    this.store.dispatch(new ActionAppNavToHome());
  }
}
