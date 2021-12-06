import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { UserProfile } from './user-profile.model';

export interface UserProfileState
  extends EntityState<UserProfile, string>,
    ActiveState<string> {}
const initialState = {
  loading: false,
};
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'userProfile' })
export class UserProfileStore extends EntityStore<UserProfileState> {
  constructor() {
    super(initialState);
  }
}
