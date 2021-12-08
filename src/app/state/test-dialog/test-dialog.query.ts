import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BaseStateQuery } from 'src/store/base-state/base-state.query';
import { TestDialogState, TestDialogStore } from './test-dialog.store';

@Injectable({ providedIn: 'root' })
export class TestDialogQuery extends BaseStateQuery<TestDialogState> {
  isClosed$: Observable<boolean | null> = this.select(
    (state) => state.isOpen
  ).pipe(filter((isOpen) => isOpen === false));

  isOpen$: Observable<any> = this.select((state) => state.isOpen).pipe(
    filter((isOpen) => isOpen === true)
  );

  constructor(protected store: TestDialogStore, actions: Actions) {
    super(store, actions);
  }
}
