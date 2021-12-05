import { User } from 'src/app/app.component';
import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserState, UserStore } from './user.store';
import { BaseService } from '../base/base.service';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService<UserState, User> {
  constructor(actions: Actions, userStore: UserStore) {
    super(actions, userStore);
  }

  setActive(user: User | null) {
    this.store.setActive(user ? user.id : '');
  }
}
