import { Component ,ElementRef,ViewChild} from '@angular/core';
import { ListProductsComponent } from './list-products/list-products.component';

import { SharedModule } from '../../modules/shared/shared.module';
import { ProductCreateModel } from '../../../models/products/productCreate.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { CategoryModel } from '../../../models/categories/category.model';
import { NgForm } from '@angular/forms';
import { SubCategory1Model } from '../../../models/categories/subCategory1.model';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ListProductsComponent,
    SharedModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

baseAdminUrl:string="category/admin/";
search:string="";
categoryNames: CategoryModel[]=[];
subCategories1:SubCategory1Model[]=[];
createModel:ProductCreateModel =new ProductCreateModel();
 
  constructor(
    private httpService:HttpService,
    private swal:SwalService
  ){}

@ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
@ViewChild(ListProductsComponent) listComponents: ListProductsComponent;
  ngOnInit(): void {
   //this.listComponents.getAll();
  }

  getCategories(){
      this.httpService.get<CategoryModel[]>(this.baseAdminUrl+"getCategoryNames",(res)=>{
        this.categoryNames=res;
      });  
  }
  onCategoryChange(event: any) {
    const selectedCategoryName = event.target.value;
  
    // API çağrısını yaparken callback fonksiyonlarını da geçiyoruz
    this.httpService.get<any>(`${this.baseAdminUrl}getSubCategorNames/${selectedCategoryName}`,
      (res) => {
        console.log("1"+JSON.stringify(res));
        // Başarılı sonuç geldiğinde çalışacak callback fonksiyonu
        this.subCategories1 = res.subCategory1;
      },
      () => {
        // Hata durumunda çalışacak callback fonksiyonu
        console.error('Hata oluştu!');
      }
    );
  }
  
  create(form:NgForm){
    if(form.valid){
      this.httpService.post<string>("product/addProduct",this.createModel,(res)=>{
          this.swal.callToast(res);
          this.createModel=new ProductCreateModel();
          this.createModalCloseBtn?.nativeElement.click();
          this.listComponents.getAll();
      });
    }
  }

}
