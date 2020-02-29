import { Component, Input, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';

import { AppProperties } from '@fantasia/app/models';
import { ActionAppNavToChild } from '@fantasia/app/state';
import { AnimationHover } from '@fantasia/app/animations';
import { Animation } from '@fantasia/app/enums';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [ AnimationHover ]
})
export class ComponentMenuItem {
  public animation: string = Animation.Default;

  constructor(private store: Store) {}

  @Input() app: AppProperties;

  @HostListener('click')
  public navigate(): void {
    this.store.dispatch(new ActionAppNavToChild(this.app.key));
  }

  @HostListener('mouseover')
  public mouseover(): void {
    this.animation = Animation.Hover;
  }

  @HostListener('mouseleave')
  public mouseleave(): void {
    this.animation = Animation.Default;
  }
}
