import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentMenuItem } from './menu-item.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ComponentMenuItem],
  exports: [ComponentMenuItem]
})
export class ModuleMenuItem {}
