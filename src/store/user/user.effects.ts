import { entityUpsertSuccess, entityLoadSuccess } from './../base/base.actions';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { tap, filter } from 'rxjs/operators';
import { UserQuery } from './user.query';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';

@Injectable()
export class UserEffects {
  private snackBarRef!: MatSnackBarRef<any>;
  constructor(private userQuery: UserQuery, private snackBar: MatSnackBar) {}

  // Or use the decorator
  @Effect()
  onUpsertSuccess$ = this.userQuery.stream$.pipe(
    ofType(entityUpsertSuccess),
    tap((data) => {
      if (data) {
        this.snackBarRef = this.snackBar.open('UPSERT SUCCESS', undefined, {
          duration: 3000,
        });
      }
    })
  );
  @Effect()
  loadMainNavigationSuccess$ = this.userQuery.stream$.pipe(
    ofType(entityLoadSuccess),
    tap((data) => {
      if (data) {
        this.snackBarRef = this.snackBar.open('LOADING SUCCESS', undefined, {
          duration: 3000,
        });
      }
    })
  );
}
