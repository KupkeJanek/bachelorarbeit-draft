import { createAction, props } from '@datorama/akita-ng-effects';
export const entityLoadSuccess = createAction(
  'Load Success',
  props<{ storeName: string }>()
);
export const entityLoadFailure = createAction('ERROR - Load Failure');
export const entityUpsertSuccess = createAction(
  'Upsert Success',
  props<{ storeName: string }>()
);
export const entityUpsertFailure = createAction('ERROR - Upsert Failure');
export const entityDeleteSuccess = createAction('Delete Success');
export const entityDeleteFailure = createAction('ERROR - Delete Failure');
export const entityAddSuccess = createAction('Add Success');
export const entityAddFailure = createAction('ERROR - Add Failure');
