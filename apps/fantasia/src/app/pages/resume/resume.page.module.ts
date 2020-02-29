import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageResume } from './resume.page';

const routes: Routes = [
    { path: '', component: PageResume }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PageResume],
    entryComponents: [PageResume]
})
export class ModulePageResume { }
