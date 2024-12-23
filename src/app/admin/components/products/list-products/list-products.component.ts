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
  products: ProductListModel[] = [];

constructor(private productService:ProductService){}
ngOnInit() : void {
  this.loadProducts();
}
loadProducts(): void {
  this.productService.getList(
    (data) => {
      this.products = data; // API'den gelen ürünler
      console.log('Products:', this.products);
    },
    () => {
      console.error('Error fetching product list.');
    }
  );
}
}
