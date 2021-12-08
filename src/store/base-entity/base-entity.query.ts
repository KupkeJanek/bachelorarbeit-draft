import { Injectable } from '@angular/core';
import { EntityStore, QueryEntity } from '@datorama/akita';
import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Action } from '@datorama/akita-ng-effects/lib/types';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseEntityQuery<S> extends QueryEntity<S> {
  actionStream$: Observable<Action> = this.actions.pipe(
    filter((action) => action.storeName === this.store.storeName)
  );
  constructor(protected store: EntityStore<S>, private actions: Actions) {
    super(store);
  }

  public selectActionStream(action: any): Observable<Action> {
    return this.actionStream$.pipe(ofType(action));
  }
}
