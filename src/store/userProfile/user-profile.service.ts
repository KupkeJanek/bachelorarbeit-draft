import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { User } from 'src/app/app.component';
import { BaseEntityService } from '../base-entity/base-entity.service';
import { UserProfile } from './user-profile.model';
import { UserProfileState, UserProfileStore } from './user-profile.store';

@Injectable({ providedIn: 'root' })
export class UserProfileService extends BaseEntityService<
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
