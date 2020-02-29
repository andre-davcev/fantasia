import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModuleComponentMenu } from '@fantasia/app/components/menu';
import { ResolverPageMovie } from '@fantasia/app/pages';

import { ComponentMainRoutes } from './main.component.routes';
import { ComponentMain } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentMainRoutes)
  ],
  declarations: [ComponentMain],
  providers: [ResolverPageMovie]
})
export class ModuleComponentMain { }
