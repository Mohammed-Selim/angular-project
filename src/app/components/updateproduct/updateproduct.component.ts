import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/IProduct';
import { ProductapiService } from 'src/app/services/productapi.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  prd: Iproduct = {} as Iproduct;
  productId: number = 0;
  product: any;
  catList: ICategory[];
  constructor(
    private prdApi: ProductapiService,
    private router: ActivatedRoute,
    private rout:Router,
    private location :Location
  ) {
    this.catList = [
      { id: 1, Name: 'Mobiles' },
      { id: 2, Name: 'LapTop' },
      { id: 3, Name: 'TV' },
    ];
  }
  ngOnInit(): void {
    this.productId = this.router.snapshot.paramMap.get('id')
      ? Number(this.router.snapshot.paramMap.get('id'))
      : 0;
       console.log( this.productId);

    this.prdApi
      .getProductbyid(this.productId)
      .subscribe((product) => (this.prd = product));
     // console.log( this.prdApi);
  }
  UpdatedProd(): void {
    this.prdApi.updateProduct(this.prd).subscribe();
    this.rout.navigate(['/orderparent']);

  }

}
