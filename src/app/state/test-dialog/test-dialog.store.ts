import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface TestDialogState {
  key: string;
  isOpen: boolean | null;
  title: string;
}

export function createInitialState(): TestDialogState {
  return {
    key: '',
    isOpen: null,
    title: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'test-dialog' })
export class TestDialogStore extends Store<TestDialogState> {
  constructor() {
    super(createInitialState());
  }
}
