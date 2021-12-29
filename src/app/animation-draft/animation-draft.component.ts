import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, timer } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';
import { GeneratedStyles } from './animate';
import { DOCUMENT } from '@angular/common';
import { MatDrawerContent } from '@angular/material/sidenav';
import {
  map,
  switchMap,
  tap,
  filter,
  debounceTime,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-animation-draft',
  templateUrl: './animation-draft.component.html',
  styleUrls: ['./animation-draft.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        animate('1s ease', GeneratedStyles.Animations.slideInUp),
      ]),
      transition(`:leave`, [
        animate('1s ease', GeneratedStyles.Animations.slideOutUp),
      ]),
    ]),
  ],
})
export class AnimationDraftComponent implements OnInit {
  scrollProgress = 0;
  scrolling$: Observable<boolean>;
  scrollValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isAnimated = false;
  currentPage = 1;

  constructor() {
    this.scrolling$ = fromEvent(window, 'wheel').pipe(
      filter((data: any) => data.deltaY > 0),
      throttleTime(1000),
      tap((data: any) => {
        this.currentPage++;
        this.scrollProgress += 50;
        this.scrollValue$.next(this.scrollProgress);
      }),
      map((data) => !!data)
    );
  }

  ngOnInit(): void {}

  moveForwads() {}
}
