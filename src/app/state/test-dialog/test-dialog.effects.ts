import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Effect } from '@datorama/akita-ng-effects';
import { switchMap, tap } from 'rxjs/operators';
import { TestDialogComponent } from 'src/app/test-dialog/test-dialog.component';
import { TestDialogQuery } from './test-dialog.query';
import { TestDialogService } from './test-dialog.service';

@Injectable()
export class TestDialogEffects {
  private dialogRef!: MatDialogRef<any>;
  constructor(
    private query: TestDialogQuery,
    private dialog: MatDialog,
    private service: TestDialogService
  ) {}

  // Or use the decorator
  @Effect()
  onOpenDialog$ = this.query.isOpen$.pipe(
    switchMap((payload) => {
      this.dialogRef = this.dialog.open(TestDialogComponent);
      return this.dialogRef.afterClosed().pipe(
        tap((data) => {
          this.service.closeDialog(data);
        })
      );
    })
  );
  @Effect()
  close$ = this.query.isClosed$.pipe(
    tap((payload) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    })
  );
}
