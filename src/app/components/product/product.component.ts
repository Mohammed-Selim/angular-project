import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icart } from 'src/app/models/icart';
import { Iproduct } from 'src/app/models/IProduct';
import { Stor } from 'src/app/models/stor';
import { ProductService } from 'src/app/services/product.service';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  public ClientName: string = "mohammed"
  // dat:Date= new Date();
  date1: Date = new Date();
  st: Stor = new Stor("stor1", "assets/logo.jfif", ["item1", "item2"])
  //   product:Iproduct={
  //     ID:1, 
  //     Name:"product",
  //     Quantity:5,
  //     Price:50,
  //     ImgUrl:"assets/cercl_img2.png",
  //     CateogryID:2
  //   }

  //   product1:Iproduct={
  //     ID:2, 
  //     Name:"product1",
  //     Quantity:5,
  //     Price:5,
  //     ImgUrl:"assets/cercl_img2.png",
  //     CateogryID:2
  //   }
  // ////////////////////////////////////////
  // product2:Iproduct={
  //   ID:3, 
  //   Name:"product2",
  //   Quantity:1,
  //   Price:11,
  //   ImgUrl:"../../../assets/cercl_img2.png",
  //   CateogryID:3
  // }
  // product3:Iproduct={
  //   ID:4, 
  //   Name:"product3",
  //   Quantity:5,
  //   Price:50,
  //   ImgUrl:"assets/cercl_img2.png",
  //   CateogryID:2
  // }
  // public ProductList:Iproduct[];
  productlist: Iproduct[] = [];

  productcatlist: Iproduct[] = [];
  @Input() recivedcatid: number = 0;
  constructor(private proser: ProductService, private router: Router,
    private papi : ProductapiService,private loc :Location) {

   // this.productlist = this.proser.getAllProducts();

   this.papi.getAllProducts().subscribe(data=>{this.productlist=data})
   this.papi.getProductbyid(2).subscribe(data=>{console.log(data)})
  //  this.papi.getProductsbycatid(1).subscribe(data=>{this.productlist=data})


    // this.productcatlist=this.proser.getProductsByCatID(this.recivedcatid);

    // this.ProductList=[this.product,this.product2,this.product3,this.product1]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showlogo: boolean = true;
  toggle() {

    this.showlogo = !this.showlogo;

  }
  // getid(n:any)
  // {
  //   this.recivedcatid= Number(n);
  // }
  decrease(p: Iproduct) {
    p.Quantity = p.Quantity - 1;
  }

  ngOnChanges(): void {

    this.productcatlist = this.proser.getProductsByCatID(this.recivedcatid);
    // this.productlist=this.proser.getAllProducts();
  }
  prdDetails(id: number) {
    this.router.navigate(['productDetails', id])

  }
 
  // getproductbyid()
  // {

  // if(this.recivedcatid==0)
  // {this.productcatlist=Array.from(this.proser.ProductList)
  // return;
  // }
  // this.productcatlist= this.ProductList.filter((prd)=>prd.CateogryID==this.recivedcatid);
  // }
  // ngOnInit(): void {
  //    this.getproductbyid()
  // }

  orderTotalPrice: number = 0;
  @Output() totalPriceEvent: EventEmitter<number> = new EventEmitter<number>();
  gettotalprice(pric: number, count: any) {
    this.orderTotalPrice += (pric * +count);
    this.totalPriceEvent.emit(this.orderTotalPrice);
  }

  @Output() Productcart: EventEmitter<Icart> = new EventEmitter<Icart>();
  // @Output() Count:EventEmitter<number>=new EventEmitter<number>();
  // productIDC:number=0;
  // co:number=0;
  cartproducts?: Icart;
  getProduct(iproduct: Iproduct, ccount: any) {
    // this.cartproducts=iproduct;
    // this.co=count as number;
    // this.Count.emit(this.co);
    //this.cartproducts={product:iproduct, count:Number(ccount)}

    this.Productcart.emit({ product: iproduct, count: Number(ccount) });
  }
  mypirth: string = "29611252503496";
  mycard: string = "1234567891234567";
  x:number=10;


  updateprod(id:any)
  {
    this.router.navigate(['updateproduct',id])
  }
  deletepro(id:number)
  {
    this.papi.deleteProduct(id).subscribe(() => {
     // this.papi = this.papi.filter(product => product.id !== id);
      this.loc.historyGo(0);
    })
  }

}
