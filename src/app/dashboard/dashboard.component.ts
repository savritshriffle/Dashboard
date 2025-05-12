import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dialog : MatDialog) {}
    openDialog() {
      this.dialog.open(DialogboxComponent,{
          width: '300px',
          height: '100px',
      })
    }
}
