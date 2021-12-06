import { UserProfile } from './user-profile.model';
import { User } from 'src/app/app.component';
import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserState, UserStore } from '../user/user.store';
import { BaseService } from '../base/base.service';
import { UserProfileState, UserProfileStore } from './user-profile.store';

@Injectable({ providedIn: 'root' })
export class UserProfileService extends BaseService<
  UserProfileState,
  UserProfile
> {
  constructor(actions: Actions, userStore: UserProfileStore) {
    super(actions, userStore);
  }

  setActive(user: User | null) {
    this.store.setActive(user ? user.id : '');
  }
}
