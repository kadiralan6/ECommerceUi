import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { ProductListModel } from "../../models/products/productList.model";



@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private httpSerivce:HttpService){}

    async getList(
        callBack: (res: ProductListModel[]) => void,
        errorCallBack?: () => void
      ): Promise<void> {
        try {
          const response = await this.httpSerivce.post<ProductListModel[]>(
            'getListProduct',
            {}
          );
          callBack(response); // `response` artık `ProductListModel[]` türünde
        } catch (error) {
          if (errorCallBack) {
            errorCallBack();
          }
        }
      }
}