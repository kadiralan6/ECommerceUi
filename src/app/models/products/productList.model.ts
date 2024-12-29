/*export interface ProductListModel {
  products: ProductModel[]; // Ürün listesi
 // resultStatus: ResultStatus; // İşlem durumu
}

export interface ProductModel {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;
  isActive: boolean;
  category: {
    id: number;
    name: string;
    subCategory1: string;
  };
}
export enum ResultStatus {
  Success = 1,
  Error = 0
}*/

import { CategoryModel } from "../categories/category.model";

export class ProductListModel{
  id: number=-1;
  name: string="";
  code: string="";
  price: number=0;
  quantity: number=0;
  isActive: boolean=false;
  category: CategoryModel = new CategoryModel();
}
