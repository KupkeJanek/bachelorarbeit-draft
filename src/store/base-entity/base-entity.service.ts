import {
  applyTransaction,
  EntityState,
  EntityStore,
  logAction,
} from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Action } from '@datorama/akita-ng-effects/lib/types';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  entityDeleteFailure,
  entityDeleteSuccess,
  entityLoadFailure,
  entityLoadSuccess,
  entityUpsertFailure,
  entityUpsertSuccess,
} from './base-entity.actions';
export type getEntityType<S> = S extends EntityState<infer I> ? I : never;

export class BaseEntityService<
  S extends EntityState = any,
  EntityType = getEntityType<S>
> {
  constructor(private actions: Actions, protected store: EntityStore<S>) {}

  dispatch(action: Action): void {
    this.actions.dispatch(action);
  }
  get(observable: Observable<getEntityType<S>[]>): Observable<S[]> {
    logAction('Load ' + this.store.storeName);
    this.store.setLoading(true);
    return observable.pipe(
      catchError((error) => {
        this.setErrorState(entityLoadFailure(), error);
        return throwError(error);
      }),
      tap((items: getEntityType<S>[]) => {
        applyTransaction(() => {
          this.actions.dispatch(
            entityLoadSuccess({ storeName: this.store.storeName })
          );
          this.store.set(items);
          this.store.setError(null);
        });
      })
    );
  }

  upsert(observable: Observable<getEntityType<S>>): Observable<S> {
    logAction('Upsert ' + this.store.storeName);
    this.store.setLoading(true);
    return observable.pipe(
      catchError((error) => {
        this.setErrorState(entityUpsertFailure(), error);
        return throwError(error);
      }),
      tap((item: getEntityType<S>) => {
        applyTransaction(() => {
          this.actions.dispatch(
            entityUpsertSuccess({ storeName: this.store.storeName })
          );
          this.store.upsert(item.id, item);
          this.store.setError(null);
          this.store.setLoading(false);
        });
      })
    );
  }

  delete(observable: Observable<getEntityType<S>>): Observable<S> {
    logAction('Delete ' + this.store.storeName);
    this.store.setLoading(true);
    return observable.pipe(
      catchError((error) => {
        this.setErrorState(entityDeleteFailure(), error);
        return throwError(error);
      }),
      tap((item: getEntityType<S>) => {
        applyTransaction(() => {
          this.actions.dispatch(entityDeleteSuccess());
          this.store.remove(item.id);
          this.store.setError(null);
          this.store.setLoading(false);
        });
      })
    );
  }

  private setErrorState(action: any, error: any): Observable<any> {
    applyTransaction(() => {
      this.actions.dispatch(action);
      this.store.setLoading(false);
      this.store.setError(true);
    });
    return throwError(error);
  }
}
