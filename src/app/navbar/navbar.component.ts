import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogboxComponent,{
      width: '300px',
      height: '100px'
    })
  }
};