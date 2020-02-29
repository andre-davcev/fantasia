import { async } from '@angular/core/testing';
import { ResolverPageMovie } from './movies.page.resolver';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { createService } from '@netbasal/spectator';

describe('ResolverPageMovie', () => {
  const spectator = createService<ResolverPageMovie>(ResolverPageMovie);

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should generate an app lookup', async(() => {
    const observable$: Observable<Array<any>> = spectator.service.resolve(undefined, undefined);

    observable$.pipe(take(1)).subscribe((result: Array<any>) =>
      expect(result.length).toBe(0)
    );
  }));
});
