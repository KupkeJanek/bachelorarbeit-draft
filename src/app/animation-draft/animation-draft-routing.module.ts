import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationDraftComponent } from './animation-draft.component';

const routes: Routes = [{ path: '', component: AnimationDraftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationDraftRoutingModule { }
