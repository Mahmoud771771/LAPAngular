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

  constructor() { 
    this.Discount=DiscountOffers.Low_Diccount;
    this.StoreName="Mobile Store";
    this.Store_Logo="../assets/Images/shop.jpg";
    this.ProductList=[{ID:2,Name:"oppof11",Quantity:5,Price:3000,Img:"../assets/Images/"+"oppo/"+"1.jpg"},
                      {ID:2,Name:"oppof11",Quantity:5,Price:4000,Img:"../assets/Images/"+"oppo/"+"2.jpg"},
                      {ID:2,Name:"oppof11",Quantity:5,Price:6000,Img:"../assets/Images/"+"oppo/"+"3.jpg"},
                      {ID:2,Name:"oppof11",Quantity:5,Price:3000,Img:"../assets/Images/"+"oppo/"+"4.jpg"},
                      {ID:2,Name:"oppof11",Quantity:5,Price:6500,Img:"../assets/Images/"+"oppo/"+"5.jpg"},
                      {ID:2,Name:"oppof11",Quantity:5,Price:8000,Img:"../assets/Images/"+"oppo/"+"6.jpg"}];
    this.CategoryList=[{ID:1,Name:"oppo"},{ID:2,Name:"Samsung"},
                        {ID:3,Name:"Apple"},{ID:4,Name:"Nokia"}];
    this.ClientName="Mahmoud";
    this.IsPurshased=true;
    // this.hederProducts1=Object.keys(ProductList[0])
  }
  displayMsg(){
    this.dataMessage="Thanks for purchasing from our Store";
    this.IsFlag=false;
  }

  ngOnInit(): void {
  }

}
