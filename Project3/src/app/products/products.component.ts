import { ProductServiceService } from './../Services/product-service.service';
import { ICategory } from './../Shared_Classes_and_types/ICategory';
import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_and_types/DiscountOffers';
import { IProduct } from '../Shared_Classes_and_types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:DiscountOffers;
  StoreName:string;
  Store_Logo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  hederProducts=["ID","Name","Quantity","Price"];
  // hederProducts1=Array[];
  dataName:string="";
  dataMessage:string="";
  IsFlag:boolean=true;
  dataSearch:number;

  constructor(private productService:ProductServiceService) { 
    this.dataSearch=0;
    this.Discount=DiscountOffers.No_Diccount;
    this.StoreName="Mobile Store";
    this.Store_Logo="../assets/Images/shop.jpg";
    this.ProductList=productService.GetAllProducts();
    
    this.CategoryList=[{ID:1,Name:"oppo"},{ID:2,Name:"Samsung"},
                        {ID:3,Name:"Apple"},{ID:4,Name:"Nokia"}];
    this.ClientName="Mahmoud";
    this.IsPurshased=false;
    // this.hederProducts1=Object.keys(ProductList[0])
  }
  displayMsg(){
    this.dataMessage="Thanks for purchasing from our Store";
    this.IsPurshased=true;
    this.IsFlag=false;
  }
  ngOnInit(): void {
  }
  Find(id:number):any{
   
   return this.productService.GetProductById(id);
    
  }
  renderValues():IProduct[]{
    return this.ProductList;
  }

}
