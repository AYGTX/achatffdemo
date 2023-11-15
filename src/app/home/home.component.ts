import { ProductType } from './../Models/Phone';
import { Injector, inject } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { PhoneService } from '../services/phone.service';
import { Observable } from 'rxjs';
import { Phone } from '../Models/Phone';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  service = inject(PhoneService);
  dataService = inject(DataService);


  phonesx: any
  sPhone: Phone | undefined;
  telFromDropdown: string = '93210420';
  phones$!: Observable<Phone[]>;
  contactForm: FormGroup;
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      phone: null
    });
  }

  ngOnInit(): void {
    this.phones$ = this.service.getAll<Phone>();
  }
  submit() {
    this.sPhone = this.contactForm.controls['phone'].value;

  }
  getProduct(pType: ProductType) {
    switch (pType) {
      case (ProductType.CLE): {
        return 'Clé'
      }
      case (ProductType.FIXE): {
        return 'Fixe'
      }
      default:
        return 'Mobile'
    }
  }

  poursuivre(sPhone: any) {
    this.dataService.setData(sPhone)
    this.router.navigateByUrl('achat-forfait')
  }
}
