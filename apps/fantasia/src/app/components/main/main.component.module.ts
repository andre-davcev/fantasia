import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentMainRoutes } from './main.component.routes';
import { ComponentMain } from './main.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ComponentMainRoutes)],
  declarations: [ComponentMain]
})
export class ModuleComponentMain {}
