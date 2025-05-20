import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../material/dialog-box/dialog-box.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isVisible = false;
  
  constructor(
    private dialog: MatDialog,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url === '/' || event.url === '/login' || event.url === '/user-registration') {
          this.isVisible = false;
        }
        else {
          this.isVisible = true;
        }
      }
    })
  }

  public openDialog() {
    this.dialog.open(DialogboxComponent,{
      width: '300px',
      height: '100px'
    })
  }

  public logout() {
    const isConfirmed = confirm('Are you sure you want to logout?');
    if (isConfirmed) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.forEach((user: Record<string, string | boolean>) => user['isLoggedIn'] = false);
      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigate(['/login']);
    }
  }
};