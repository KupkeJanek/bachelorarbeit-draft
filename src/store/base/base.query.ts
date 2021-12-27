import { entityLoadSuccess, entityUpsertSuccess } from './../base/base.actions';
import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseQuery {
  constructor(private actions: Actions) {}

  getUpsertSuccessStream(storeName: string) {
    return this.actions.pipe(
      ofType(entityUpsertSuccess),
      filter((action) => action.storeName === storeName)
    );
  }
  getLoadSuccessStream(storeName: string) {
    return this.actions.pipe(
      ofType(entityLoadSuccess),
      filter((action) => action.storeName === storeName)
    );
  }
  getEntityStream(storeName: string) {
    return this.actions.pipe(
      filter((action) => action.storeName === storeName)
    );
  }
}
