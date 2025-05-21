import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramCloneRoutingModule } from './instagram-clone-routing.module';
import { InstagramCloneComponent } from './instagram-clone.component';



@NgModule({
  declarations: [
    InstagramCloneComponent,
  ],
  imports: [
    CommonModule,
    InstagramCloneRoutingModule
  ]
})
export class InstagramCloneModule { }
