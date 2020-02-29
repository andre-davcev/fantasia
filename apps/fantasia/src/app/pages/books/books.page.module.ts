import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageBooks } from './books.page';

const routes: Routes = [
    { path: '', component: PageBooks }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],

    declarations: [PageBooks],
    entryComponents: [PageBooks]
})
export class ModulePageBooks { }
