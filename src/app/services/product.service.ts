import { Injectable } from '@angular/core';
import { Iproduct } from '../models/IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
   ProductList:Iproduct[];
  constructor() {
    this.ProductList=[
      {
        id:1, 
        Name:"product",
        Quantity:5,
        Price:50,
        ImgUrl:"assets/cercl_img2.png",
        CateogryID:2
      },
      {
        id:1, 
        Name:"product",
        Quantity:5,
        Price:50,
        ImgUrl:"assets/cercl_img2.png",
        CateogryID:2
      },{
        id:2, 
        Name:"product1",
        Quantity:5,
        Price:5,
        ImgUrl:"assets/cercl_img2.png",
        CateogryID:2
      },{
        id:3, 
        Name:"product2",
        Quantity:1,
        Price:11,
        ImgUrl:"../../../assets/cercl_img2.png",
        CateogryID:3
      },{
        id:4, 
        Name:"product3",
        Quantity:5,
        Price:50,
        ImgUrl:"assets/cercl_img2.png",
        CateogryID:2
      }
    ];}
    getAllProducts():Iproduct[]{

      return this.ProductList;
    }
    getProductsByCatID(catid:number):Iproduct[] 
    {
      if(catid==0)
      {return this.ProductList}
      else{return this.ProductList.filter(p=>p.id==catid);}

    }
    getProductByID(proid:number):Iproduct|undefined
    {
      return this.ProductList.find(p=>p.id==proid)  
    }




 
}
