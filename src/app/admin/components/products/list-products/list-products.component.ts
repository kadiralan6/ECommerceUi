import { Component,OnInit,ViewChild } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

import { ProductListModel } from '../../../../models/products/productList.model';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit  {
  productList: ProductListModel[] = [];

constructor(private httpService:HttpService){}
ngOnInit() : void {
this.getAll();
}

getAll(){
  console.log("1");
  this.httpService.get<ProductListModel[]>("product/getListProduct",(res)=>{
    this.productList=res;
  })
}


}
