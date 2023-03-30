import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { OrderParentComponent } from './components/order-parent/order-parent.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RoundedBorderDirective } from './directives/rounded-border.directive';
import { BGCOLORDirective } from './directives/bgcolor.directive';

import { CreditcardPipe } from './pipes/creditcard.pipe';
import { BirthDatePipe } from './pipes/birth-date.pipe';
import { TaxPipe } from './pipes/tax.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { AddnewproductComponent } from './components/admin/addnewproduct/addnewproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    SideMenuComponent,
    OrderParentComponent,
    OrderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    RoundedBorderDirective,
    BGCOLORDirective,
   
    CreditcardPipe,
    BirthDatePipe,
    TaxPipe,
    CategoryComponent,
    AddnewproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
