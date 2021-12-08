import { Injectable } from '@angular/core';
import { EntityStore, QueryEntity } from '@datorama/akita';
import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Action } from '@datorama/akita-ng-effects/lib/types';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { entityUpsertSuccess } from './../base/base.actions';

@Injectable({ providedIn: 'root' })
export class BaseQuery<S> extends QueryEntity<S> {
  actionStream$: Observable<Action> = this.actions.pipe(
    filter((action) => action.storeName === this.store.storeName)
  );
  constructor(protected store: EntityStore<S>, private actions: Actions) {
    super(store);
  }

  selectActionStream(action: Action) {
    return this.actions.pipe(
      ofType(entityUpsertSuccess),
      filter((action) => action.type === this.store.storeName)
    );
  }
}
