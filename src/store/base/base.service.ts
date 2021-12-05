import {
  applyTransaction,
  EntityService,
  EntityState,
  EntityStore,
  getIDType,
  logAction,
  Store,
} from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable, of, throwError, timer } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  entityLoadSuccess,
  entityLoadFailure,
  entityAddSuccess,
  entityAddFailure,
  entityDeleteFailure,
  entityDeleteSuccess,
  entityupsertFailure,
  entityupsertSuccess,
} from './base.actions';
export type getEntityType<S> = S extends EntityState<infer I> ? I : never;

export class BaseService<
  S extends EntityState = any,
  EntityType = getEntityType<S>
> {
  constructor(public actions: Actions, public store: EntityStore<S>) {}

  get<T>(observable: Observable<any>): Observable<S[]> {
    logAction('Load ' + this.store.storeName);
    this.store.setLoading(true);
    return observable.pipe(
      catchError((error) => {
        this.setErrorState(entityLoadFailure(), error);
        return throwError(error);
      }),
      tap((items: getEntityType<S>[]) => {
        applyTransaction(() => {
          this.actions.dispatch(entityLoadSuccess());
          this.store.set(items);
          this.store.setError(null);
        });
      })
    );
  }

  upsert(observable: Observable<any>): Observable<S> {
    logAction('Upsert ' + this.store.storeName);
    this.store.setLoading(true);
    return observable.pipe(
      catchError((error) => {
        this.setErrorState(entityupsertFailure(), error);
        return throwError(error);
      }),
      tap((item: getEntityType<S>) => {
        applyTransaction(() => {
          this.actions.dispatch(entityupsertSuccess());
          this.store.upsert(item.id, item);
          this.store.setError(null);
          this.store.setLoading(false);
        });
      })
    );
  }

  delete<T>(observable: Observable<any>): Observable<S> {
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
