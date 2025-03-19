import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private dialog : MatDialog) {}
  openDialog() {
   this.dialog.open(AboutComponent,{
      width: '300px',
      height: '100px',
   })
  }
}
