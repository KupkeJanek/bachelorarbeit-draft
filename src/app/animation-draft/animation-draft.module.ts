import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationDraftRoutingModule } from './animation-draft-routing.module';
import { AnimationDraftComponent } from './animation-draft.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AnimationDraftComponent],
  imports: [CommonModule, AnimationDraftRoutingModule, MaterialModule],
})
export class AnimationDraftModule {}
