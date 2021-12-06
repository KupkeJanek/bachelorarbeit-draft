import { entityUpsertSuccess } from './../base/base.actions';
import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserStore, UserState } from './user.store';
import { entityLoadSuccess } from '../base/base.actions';
import { BaseQuery } from '../base/base.query';
import { Action } from '@datorama/akita-ng-effects/lib/types';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
  stream$: Observable<Action>;
  constructor(protected store: UserStore, private baseQuery: BaseQuery) {
    super(store);
    this.stream$ = this.baseQuery.getEntityStream(this.store.storeName);
  }
}
