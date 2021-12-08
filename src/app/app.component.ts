import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { mocks } from 'src/store/user/user.mock';
import { UserService } from 'src/store/user/user.service';
import { UserProfileService } from 'src/store/userProfile/user-profile.service';
import { UserQuery } from './../store/user/user.query';
import { TestDialogQuery } from './state/test-dialog/test-dialog.query';
import { TestDialogService } from './state/test-dialog/test-dialog.service';

export interface User {
  id: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bachelorarbeit-draft';
  users$: Observable<User[]>;
  usersLoading$: Observable<boolean>;
  selectedUser$: Observable<User | undefined>;
  hasError$: Observable<boolean>;
  counter = 1;
  abcCunter = 1;
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userQuery: UserQuery,
    private usersService: UserService,
    private userProfileSerivce: UserProfileService,
    private testDialogService: TestDialogService,
    private testDialogQuery: TestDialogQuery,
    private actions: Actions
  ) {
    this.users$ = this.userQuery.selectAll();
    this.usersLoading$ = this.userQuery.selectLoading();
    this.selectedUser$ = this.userQuery.selectActive();
    this.hasError$ = this.userQuery.selectError();
    this.onLoadUsers();
    this.testSystem();
    // setTimeout(() => {
    //   this.openDialog();
    // }, 5000);

    // this.actions
    //   .pipe(
    //     filter((action) => {
    //       console.log(action);
    //       return action.type === 'Update';
    //     })
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }

  async onLoadUsers() {
    const res = await this.usersService
      .get(
        timer(1000).pipe(
          switchMap((data) => {
            if (this.counter++ % 2 === 0) {
              return throwError('ERROR IN HTTP CALL');
            } else {
              return of(mocks);
            }
          })
        )
      )
      .toPromise();
    console.log(res);
  }
  openDialog() {
    this.testDialogService.openDialog('Hello World ' + this.abcCunter++);
  }
  onSelectUser(user: User | null) {
    this.usersService.setActive(user);
  }

  onOpenDialog() {
    this.dialog.open(AppComponent);
  }

  onOpenSnackbar() {
    this.snackBar.open('SNACKBAR');
  }

  async testSystem() {}

  async loadFailuire() {
    await this.usersService.get(throwError('ERROR LOADING')).toPromise();
  }
  async updateFailuire() {
    await this.usersService.upsert(of({ name: 'XMAS', id: '191' })).toPromise();
    await this.usersService.delete(of({ name: 'XMAS', id: '1' })).toPromise();
    await timer(2000).toPromise();
    await this.usersService.upsert(of({ name: 'XMAS', id: '1' })).toPromise();
    await timer(3000).toPromise();
    await this.usersService.upsert(throwError('ERROR UPDATE')).toPromise();
  }

  async add() {
    await this.userProfileSerivce
      .upsert(of({ name: 'XMAS', id: '191' }))
      .toPromise();
  }
}
