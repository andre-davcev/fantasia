import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolverPageMovie implements Resolve<Array<string>> {
    constructor() { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<any>> {
        return of([]);
    }
}
