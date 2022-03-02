
import { Injectable } from '@angular/core';
import { IProduct } from '../Shared_Classes_and_types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private ProductList:IProduct[];
  constructor() { 
    this.ProductList=[{ID:2,Name:"oppof11",Quantity:5,Price:3000,Img:"../assets/Images/"+"oppo/"+"1.jpg"},
    {ID:2,Name:"oppof11",Quantity:5,Price:4000,Img:"../assets/Images/"+"oppo/"+"2.jpg"},
    {ID:2,Name:"oppof11",Quantity:5,Price:6000,Img:"../assets/Images/"+"oppo/"+"3.jpg"},
    {ID:2,Name:"oppof11",Quantity:5,Price:3000,Img:"../assets/Images/"+"oppo/"+"4.jpg"},
    {ID:2,Name:"oppof11",Quantity:5,Price:6500,Img:"../assets/Images/"+"oppo/"+"5.jpg"},
    {ID:2,Name:"oppof11",Quantity:5,Price:8000,Img:"../assets/Images/"+"oppo/"+"6.jpg"}];

  }
  GetAllProducts():IProduct[]{
      return this.ProductList;
    }
    GetProductById(prdId:number):any|null{
      return this.ProductList.find(x=>x.ID==prdId)
    }
}
