import { createAction } from '@datorama/akita-ng-effects';

export const entityLoadSuccess = createAction('Load Success');
export const entityLoadFailure = createAction('ERROR - Load Failure');
export const entityupsertSuccess = createAction('Upsert Success');
export const entityupsertFailure = createAction('ERROR - Upsert Failure');
export const entityDeleteSuccess = createAction('Delete Success');
export const entityDeleteFailure = createAction('ERROR - Delete Failure');
export const entityAddSuccess = createAction('Add Success');
export const entityAddFailure = createAction('ERROR - Add Failure');
