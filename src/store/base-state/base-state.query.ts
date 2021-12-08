import { Injectable } from '@angular/core';
import { Query, Store } from '@datorama/akita';
import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Action } from '@datorama/akita-ng-effects/lib/types';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseStateQuery<S> extends Query<S> {
  actionStream$: Observable<Action> = this.actions.pipe(
    filter((action) => action.storeName === this.store.storeName)
  );
  constructor(protected store: Store<S>, private actions: Actions) {
    super(store);
  }

  public selectActionStream(action: any): Observable<Action> {
    return this.actionStream$.pipe(ofType(action));
  }
}
