import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

import { Animation } from '@fantasia/app/enums';
import { AnimationHover } from '@fantasia/app/animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ AnimationHover ]
})
export class ComponentLogo {
  public animation: string = Animation.Default;

  @HostListener('mouseover')
  public mouseover(): void {
    this.animation = Animation.Hover;
  }

  @HostListener('mouseleave')
  public mouseleave(): void {
    this.animation = Animation.Default;
  }
}
