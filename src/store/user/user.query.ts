import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { BaseEntityQuery } from '../base-entity/base-entity.query';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends BaseEntityQuery<UserState> {
  constructor(store: UserStore, actions: Actions) {
    super(store, actions);
  }
}
