import { Component, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['oumaima@gmail.com', Validators.email],
    password: ['welcome', Validators.required]
  });


  constructor(
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) { }

    ngOnInit(): void {

  }

  async onSubmit() {
    if (this.form.valid) {
      try {
        this.service.login(this.form.value).subscribe((x: any) => {
          localStorage.setItem("logged",this.form.controls.email.value!)
          this.router.navigate(['/achat-forfait']);
          this._snackBar.open("Login Successful", "Close", {
            duration: 2000
          });
        },
          (error: any) => {
            console.error(error.error);
            this._snackBar.open(error.error, "Close", {
              duration: 5000
            });
          });
      } catch (err) {
        this._snackBar.open("Error with Username or Password", "Close", {
          duration: 5000
        });
      }
    } else {
      //this.formSubmitAttempt = true;
    }
  }



}
