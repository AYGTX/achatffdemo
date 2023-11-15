import { ProductType } from "./Phone"

export interface Forfait {
  id: string,
  size: number,
  unit: string,
  basePrice: number,
  bankDiscount: number,
  restrictedRatePlans: number[]
  allowedProductType: ProductType
}
