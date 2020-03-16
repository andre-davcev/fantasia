import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ModuleMenuItem } from '@fantasia/app/components/menu-item';
import { ModuleComponentLogo } from '@fantasia/app/components/logo';

import { ComponentMenu } from './menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatGridListModule,
    ModuleMenuItem,
    ModuleComponentLogo
  ],

  declarations: [ComponentMenu],
  exports: [ComponentMenu]
})
export class ModuleComponentMenu { }
