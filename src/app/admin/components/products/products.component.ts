import { Component } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ListProductsComponent,
    CreateProductsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
