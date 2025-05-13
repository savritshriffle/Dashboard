import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog : MatDialog) {}
  openDialog() {
    this.dialog.open(DialogboxComponent,{
      width: '300px',
      height: '100px',
    })
  }
}
