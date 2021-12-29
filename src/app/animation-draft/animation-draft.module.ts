import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationDraftRoutingModule } from './animation-draft-routing.module';
import { AnimationDraftComponent } from './animation-draft.component';
import { MaterialModule } from '../material/material.module';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';

@NgModule({
  declarations: [AnimationDraftComponent, FirstComponentComponent, SecondComponentComponent],
  imports: [CommonModule, AnimationDraftRoutingModule, MaterialModule],
})
export class AnimationDraftModule {}
