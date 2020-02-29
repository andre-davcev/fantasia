import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageMovies } from './movies.page';

const routes: Routes = [
    { path: '', component: PageMovies }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PageMovies],
    entryComponents: [PageMovies]
})
export class ModulePageMovies { }
