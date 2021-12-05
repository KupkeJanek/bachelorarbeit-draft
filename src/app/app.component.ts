import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

export interface User {
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
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.users$ = of([]);
  }

  onLoadUsers() {}
  onSelectUser() {}

  onOpenDialog() {
    this.dialog.open(AppComponent);
  }

  onOpenSnackbar() {
    this.snackBar.open('SNACKBAR');
  }
}
