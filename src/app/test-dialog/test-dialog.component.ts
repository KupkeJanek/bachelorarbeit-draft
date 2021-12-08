import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestDialogQuery } from '../state/test-dialog/test-dialog.query';
import { TestDialogService } from '../state/test-dialog/test-dialog.service';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss'],
})
export class TestDialogComponent implements OnInit {
  title = '';
  title$: Observable<string>;
  constructor(
    private query: TestDialogQuery,
    private service: TestDialogService
  ) {
    this.title$ = this.query.select((state) => state.title);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.updateTitle('ABC');
    }, 2000);
  }
}
