import { UserQuery } from './../store/user.query';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/store/user.service';
import { ID } from '@datorama/akita';

export interface User {
  id: ID;
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
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userQuery: UserQuery,
    private usersService: UserService
  ) {
    this.users$ = this.userQuery.selectAll();
    this.usersLoading$ = this.userQuery.selectLoading();
    this.selectedUser$ = this.userQuery.selectActive();
  }

  onLoadUsers() {
    this.usersService.get();
  }

  onSelectUser(user: User | null) {
    this.usersService.selectActive('asd');
  }

  onOpenDialog() {
    this.dialog.open(AppComponent);
  }

  onOpenSnackbar() {
    this.snackBar.open('SNACKBAR');
  }
}
