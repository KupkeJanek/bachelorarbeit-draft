import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDraftComponent } from './animation-draft.component';

describe('AnimationDraftComponent', () => {
  let component: AnimationDraftComponent;
  let fixture: ComponentFixture<AnimationDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
