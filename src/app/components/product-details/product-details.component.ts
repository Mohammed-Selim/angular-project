import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
currentpid:number =0;
prod: Iproduct | undefined = undefined;
constructor(private activatedroute:ActivatedRoute, private prdService: ProductService,private location :Location){}
  ngOnInit(): void {
    this.currentpid=(this.activatedroute.snapshot.paramMap.get('pid'))
    ?Number(this.activatedroute.snapshot.paramMap.get('pid')): 0 ;

    let returnedPrd=this.prdService.getProductByID(this.currentpid)
    if(returnedPrd)
    {
      this.prod=returnedPrd;

    }
    else
    {
      this.location.back();

    }
  }
  goback(){ this.location.back();}
 

}

