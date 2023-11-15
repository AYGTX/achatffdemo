export interface Phone{
  number : string,
  name : number,
  product : ProductType,
  ratePlan : number ,
}
export enum ProductType {
  GSM = 0,
  FIXE = 1,
  CLE = 2,
}
