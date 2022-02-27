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
  constructor() { 
    this.Discount=DiscountOffers.Low_Diccount;
    this.StoreName="School";
    this.Store_Logo="../assets/Images/shop.jpg";
    this.ProductList=[{ID:2,Name:"oppof11",Quantity:5,Price:2000,Img:""}];
    this.CategoryList=[{ID:1,Name:"oppo"}];
    this.ClientName="Mahmoud";
    this.IsPurshased=true;
  }

  ngOnInit(): void {
  }

}
