import { Actions, ofType } from '@datorama/akita-ng-effects';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserStore, UserState } from './user.store';
import { entityLoadSuccess } from './base/base.actions';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
  constructor(protected store: UserStore, private actions: Actions) {
    super(store);
  }

  onLoadingSuccess() {
    return this.actions.pipe(ofType(entityLoadSuccess)).pipe(
      map((action) => {
        console.log(action);
        return action;
      })
    );
  }
}
