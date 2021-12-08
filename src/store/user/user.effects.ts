import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Effect, ofType } from '@datorama/akita-ng-effects';
import { tap } from 'rxjs/operators';
import {
  entityLoadSuccess,
  entityUpsertSuccess,
} from '../base-entity/base-entity.actions';
import { UserQuery } from './user.query';

@Injectable()
export class UserEffects {
  private snackBarRef!: MatSnackBarRef<any>;
  constructor(private userQuery: UserQuery, private snackBar: MatSnackBar) {}

  // Or use the decorator
  @Effect()
  onUpsertSuccess$ = this.userQuery.actionStream$.pipe(
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
  loadMainNavigationSuccess$ = this.userQuery.actionStream$.pipe(
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
