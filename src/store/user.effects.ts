import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Actions, Effect } from '@datorama/akita-ng-effects';
import { tap } from 'rxjs/operators';
import { UserQuery } from './user.query';

@Injectable()
export class UserEffects {
  private snackBarRef!: MatSnackBarRef<any>;
  constructor(private userQuery: UserQuery, private snackBar: MatSnackBar) {}

  // Or use the decorator
  @Effect()
  loadMainNavigationSuccess$ = this.userQuery.onLoadingSuccess().pipe(
    tap((data) => {
      if (data) {
        this.snackBarRef = this.snackBar.open('LOADING SUCCESS', undefined, {
          duration: 3000,
        });
      }
    })
  );
}
