import { Component,OnInit } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { ProductListModel } from '../../../../models/products/productList.model';
import { ProductService } from '../../../../services/adminServices/product.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit  {
  products: ProductListModel = { products: [], resultStatus: 0 };

constructor(private productService:ProductService){}
ngOnInit() : void {
  this.loadProducts();
}
loadProducts(): void {
  console.log("a");
  this.productService.getListProduct(
    (res) => {
      this.products = res; // Gelen veriyi atayın
      console.log('Products loaded successfully:', res);
    },
    () => {
      console.error('Failed to load products');
    }
  );
}
}
