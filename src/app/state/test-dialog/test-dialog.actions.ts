import { createAction, props } from '@datorama/akita-ng-effects';

export const testAction = createAction(
  'Open Dialog',
  props<{ title: string }>()
);
export const testDialogClosing = createAction(
  'Closing Testdialog',
  props<any>()
);
