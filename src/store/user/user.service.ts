import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { User } from 'src/app/app.component';
import { BaseEntityService } from '../base-entity/base-entity.service';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseEntityService<UserState, User> {
  constructor(actions: Actions, userStore: UserStore) {
    super(actions, userStore);
  }

  setActive(user: User | null) {
    this.store.setActive(user ? user.id : '');
  }
}
