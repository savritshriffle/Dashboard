import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramCloneComponent } from './instagram-clone.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'instagram-clone',
    pathMatch:'full'
  },
  {
    path: 'instagram-clone',
    component: InstagramCloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramCloneRoutingModule { }
