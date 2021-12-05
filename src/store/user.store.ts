import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { User } from 'src/app/app.component';

export interface UserState
  extends EntityState<User, string>,
    ActiveState<string> {}

const initialState = {
  loading: false,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'User', idKey: 'id' })
export class UserStore extends EntityStore<UserState> {
  constructor() {
    super(initialState);
  }
}
