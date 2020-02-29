import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageStarcraft } from './starcraft.page';

const routes: Routes = [
    { path: '', component: PageStarcraft }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PageStarcraft],
    entryComponents: [PageStarcraft]
})
export class ModulePageStarcraft { }
