import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddnewproductComponent } from './components/admin/addnewproduct/addnewproduct.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrderParentComponent } from './components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

const routes: Routes = [
   {path:'',redirectTo:'/orderparent',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'orderparent',component:OrderParentComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'productDetails/:pid',component:ProductDetailsComponent},
  {path:'Addnewproduct',component:AddnewproductComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
