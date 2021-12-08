import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { BaseQuery } from '../base/base.query';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends BaseQuery<UserState> {
  constructor(store: UserStore, actions: Actions) {
    super(store, actions);
  }
}
