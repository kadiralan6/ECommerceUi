import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { ProductListModel } from "../../models/products/productList.model";



@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private httpSerivce:HttpService){}

  /*  getListProduct(successCallback: (products: ProductListModel) => void, errorCallback?: () => void): void {
      this.httpSerivce.get<ProductListModel>(
        'product/getListProduct', // API endpoint
        successCallback, // Başarılı callback
        errorCallback // Hata callback
      );
    }*/
}