import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramCloneComponent } from './instagram-clone.component';
import { StoryContentComponent } from './story-content/story-content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'instagram-clone',
    pathMatch:'full'
  },
  {
    path: 'instagram-clone',
    component: InstagramCloneComponent
  },
  {
    path: 'story-content',
    component: StoryContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramCloneRoutingModule { }
