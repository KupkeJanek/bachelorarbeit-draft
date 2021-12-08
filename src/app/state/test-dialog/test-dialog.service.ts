import { Injectable } from '@angular/core';
import { logAction } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { BaseStateService } from 'src/store/base-state/base-state.service';
import { testAction, testDialogClosing } from './test-dialog.actions';
import { TestDialogState, TestDialogStore } from './test-dialog.store';
@Injectable({ providedIn: 'root' })
export class TestDialogService extends BaseStateService<TestDialogState> {
  constructor(store: TestDialogStore, actions: Actions) {
    super(store, actions);
  }

  openDialog(title: string) {
    logAction('Open Dialog');
    this.store.update({ isOpen: true, title });
  }
  closeDialog(payload?: any) {
    this.dispatch(testDialogClosing(payload));
    this.store.update({ isOpen: false });
  }
  updateTitle(title: string) {
    this.dispatch(testAction({ title }));
    this.store.update({ title });
  }
}
