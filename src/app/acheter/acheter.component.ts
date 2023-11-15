import { Component } from '@angular/core';



@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent {
  changePaymentMethod(arg0: number) {
    throw new Error('Method not implemented.');
  }

  forfaits = [
    {
      "id": "PrP_75M_Mobile",
      "size": 75,
      "unit": "Mo",
      "basePrice": 1,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        3666,
        15
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_220M_Mobile",
      "size": 220,
      "unit": "Mo",
      "basePrice": 1000,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        12,
        42
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_440M_Mobile",
      "size": 440,
      "unit": "Mo",
      "basePrice": 2000,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        155,
        14
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_1.25G_Mobile",
      "size": 1.25,
      "unit": "Go",
      "basePrice": 2500,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        1,
        9
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_10G_Mobile",
      "size": 2,
      "unit": "Go",
      "basePrice": 10000,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        200,
        15
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_25G_Mobile",
      "size": 25,
      "unit": "Go",
      "basePrice": 25000,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        155,
        42
      ],
      "allowedProductType": 0
    },
    {
      "id": "PrP_55G_Mobile",
      "size": 55,
      "unit": "Go",
      "basePrice": 70000,
      "bankDiscount": 10,
      "restrictedRatePlans": [
        11,
        9
      ],
      "allowedProductType": 0
    }
  ]

}
