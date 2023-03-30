import { Component } from '@angular/core';
import { Icart } from 'src/app/models/icart';
import { ICategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent {
  selectedCatID: number = 0;
  catlist: ICategory[];
  constructor() {
    this.catlist =
      [
        { id: 1, Name: 'Mobiles' },
        { id: 2, Name: 'LapTop' },
        { id: 3, Name: 'TV' },
      ]

  }
  totalPriceChanged: number = 0;
  totalprice(x: number) {
    this.totalPriceChanged = x;
  }
  productcart?: Iproduct;
  p2?: Iproduct;
  arrProduct: Icart[] = [];
  getproduct(i: Icart) {
    //this.productcart=i;
    // p2=arrProduct.filter(item => item.ID != id)
    // console.log(this.arrProduct);
    // console.log(this.arrProduct.find((ii)=>ii.ID==i.ID))
    let x=this.arrProduct.find((ii)=>ii.product.id==i.product.id);
      if(x)
      {x.count=x.count+i.count}
     else{this.arrProduct.push(i);}
    // }else{//console.log(this.arrProduct.find((ii)=>ii.ID=i.ID))}
  }
  deleteproduct(idd:number)
  {
    // this.arrProduct.pop();
    for(let i=0 ; i<this.arrProduct.length ;i++ )
    {
      if(this.arrProduct[i].product.id==idd)
      {
        this.arrProduct.splice(i,1)
      }
    }
    //this.arrProduct = this.arrProduct.filter(item => item.product.ID != id)

  }
}
  // cocart:number=0;
  // counts:number[]=[];
  // getproductcount(icount:number)
  // {
  //   // this.cocart=icount;
  //   this.counts.push(icount);
  // //  console.log(this.counts);
  // }




