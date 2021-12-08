import { EntityState, Store } from '@datorama/akita';
import { Actions } from '@datorama/akita-ng-effects';
import { Action } from '@datorama/akita-ng-effects/lib/types';
export type getEntityType<S> = S extends EntityState<infer I> ? I : never;

export class BaseStateService<S> {
  constructor(protected store: Store<S>, private actions: Actions) {}

  dispatch(action: Action): void {
    this.actions.dispatch({ ...action, storeName: this.store.storeName });
  }
}
