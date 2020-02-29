import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLogo } from './logo.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentLogo],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ComponentLogo]
})
export class ModuleComponentLogo { }
