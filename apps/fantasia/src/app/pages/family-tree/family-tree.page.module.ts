import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageFamilyTree } from './family-tree.page';

const routes: Routes = [
    { path: '', component: PageFamilyTree }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PageFamilyTree],
    entryComponents: [PageFamilyTree]
})
export class ModulePageFamilyTree { }
