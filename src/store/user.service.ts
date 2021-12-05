import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID, logAction } from '@datorama/akita';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/app.component';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  mocks: User[] = [
    {
      id: '1',
      name: 'Kenny',
    },
    {
      id: '2',
      name: 'Lovre',
    },
    {
      id: '3',
      name: 'Grbesa',
    },
  ];
  constructor(private userStore: UserStore, private http: HttpClient) {}

  async get() {
    logAction('Load Users');
    this.userStore.setLoading(true);
    await timer(3000).toPromise();
    logAction('Load Users Success');
    this.userStore.upsertMany(this.mocks);
    //this.userStore.setLoading(false);
  }

  add(user: User) {
    this.userStore.add(user);
  }

  selectActive(id: ID) {
    this.userStore.setActive('1');
  }

  // update(id, user: Partial<User>) {
  //   this.userStore.update(id, user);
  // }

  // remove(id: ID) {
  //   this.userStore.remove(id);
  // }
}
