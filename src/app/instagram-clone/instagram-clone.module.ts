import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramCloneRoutingModule } from './instagram-clone-routing.module';
import { InstagramCloneComponent } from './instagram-clone.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StoryContentComponent } from './story-content/story-content.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    InstagramCloneComponent,
    StoryContentComponent
  ],
  imports: [
    CommonModule,
    InstagramCloneRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: []
})
export class InstagramCloneModule { }
