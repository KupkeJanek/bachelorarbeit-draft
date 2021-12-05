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
    ActiveState<string> {
  ui: {
    filter: string;
  };
}

const initialState = {
  loading: false,
  ui: { filter: 'asdf' },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'User' })
export class UserStore extends EntityStore<UserState> {
  constructor() {
    super(initialState);
  }

  updateFilter(filter: string) {
    this.update({ ui: { filter } });
  }
}
