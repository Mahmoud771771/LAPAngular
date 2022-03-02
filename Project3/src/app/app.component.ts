import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './Services/product-service.service';
import { IProduct } from './Shared_Classes_and_types/IProduct';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project3';
  flag:boolean=false;
  @ViewChild(ProductsComponent) products:ProductsComponent=new ProductsComponent(new ProductServiceService);
  productList:IProduct[]=this.products.renderValues();
  header:string[]= this.products.hederProducts;
  FunShow(){
    this.flag = !this.flag;
  }
}
