import { Phone, ProductType } from './../Models/Phone';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ForfaitService } from '../services/forfait.service';
import { Forfait } from '../Models/Forfait';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { PaymentMethod } from '../Models/PaymentMethod';


@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit, OnDestroy {
  pm: number = 0;
  changePaymentMethod(arg: PaymentMethod) {
    this.pm = arg;
  }
  constructor(private router: Router) { }
  checkEligibility(restrictedRatePlans: number[], allowedProductType: ProductType): any {
    console.log(restrictedRatePlans)
    console.log(allowedProductType)
    console.log(this.sPhoneNumber)
    if (restrictedRatePlans.indexOf(this.sPhoneNumber!.ratePlan) >= 0) {
      return 'disabled'
    }
    if (allowedProductType != this.sPhoneNumber?.product) {
      return 'disabled'
    }

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  service = inject(ForfaitService);
  dataService = inject(DataService);
  forfaits$!: Observable<Forfait[]>;
  sPhoneNumber: Phone | undefined;
  private destroy$ = new Subject<void>();
  private myBehaviorSubject = this.dataService.data$;

  ngOnInit(): void {

    this.forfaits$ = this.service.getAll<Forfait>();
    this.myBehaviorSubject.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.dataService.data$.subscribe((x: Phone) => {
        this.sPhoneNumber = x
        if (this.sPhoneNumber == null) { this.router.navigateByUrl('/') }
      }
      )
      this.destroy$;
    }
    )
  };
}
