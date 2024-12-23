import { Routes } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { LayoutsComponent } from './admin/components/layouts/layouts.component';
import { HomeComponent } from './admin/components/home/home.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { CategoriesComponent } from './admin/components/categories/categories.component';

export const routes: Routes = [

{
    path:"login",
    component:LoginComponent
},
{
    path:"",
    component:LayoutsComponent,
    children :[
        {
            path:"",
            component:HomeComponent
        },
        {
            path:"products",
            component:ProductsComponent
        },
        {
            path:"orders",
            component:OrdersComponent
        },
        {
            path:"categories",
            component:CategoriesComponent
        }
        
    ]
}

];
