import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PagePhotos } from './photos.page';

const routes: Routes = [
    { path: '', component: PagePhotos }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PagePhotos],
    entryComponents: [PagePhotos]
})
export class ModulePagePhotos { }
