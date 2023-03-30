import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/IProduct';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent {
pro:Iproduct={} as Iproduct
catlist: ICategory[];
  constructor(private papis: ProductapiService , private ruter:Router) { 
    this.catlist =
    [
      { id: 1, Name: 'Mobiles' },
      { id: 2, Name: 'LapTop' },
      { id: 3, Name: 'TV' },
    ]
  }
  addNew() {

    // let p: Iproduct={
    //   ID:4,
    //   Name:"product33",
    //   Quantity:5,
    //   Price:50,
    //   ImgUrl:"assets/cercl_img2.png",
    //   CateogryID:2
    //   }
      this.papis.addNewProduct(this.pro).subscribe(
        {
          next:(p)=>{this.ruter.navigate(['/orderparent'])},
          error:(er)=>{console.log(er.mess);}
        }
      )
    

  }
}
