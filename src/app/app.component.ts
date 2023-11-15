import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(
    private router: Router,
    private service: AuthService,
    private _snackBar: MatSnackBar) { }
  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
    this._snackBar.open("Logged Out successfully", "Close", {
      duration: 2000
    });
  }
  title = 'achatffdemo';
}
