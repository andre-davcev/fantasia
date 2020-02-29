import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movies',
    templateUrl: 'movies.page.html',
    styleUrls: ['./movies.page.scss']
})
export class PageMovies {
    constructor(private route: ActivatedRoute) { }
}
