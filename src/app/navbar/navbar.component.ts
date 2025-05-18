import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../material/dialog-box/dialog-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  public openDialog() {
    this.dialog.open(DialogboxComponent,{
      width: '300px',
      height: '100px'
    })
  }

  public logout() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.forEach((user: any) => user.isLoggedIn = false);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);

  }
}
