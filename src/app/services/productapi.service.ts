import { Injectable } from '@angular/core';
import { Iproduct } from '../models/IProduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

httpHeader={}  
  constructor(private httpaClient:HttpClient) {
    this.httpHeader={
      Headers :new HttpHeaders({'content-type':'application/json'})
    }
   }
  getAllProducts():Observable<Iproduct[]>{
    return this.httpaClient.get<Iproduct[]>(`${environment.APIURL}/products`)
  }

  getProductbyid(id:number):Observable<Iproduct>{
    return this.httpaClient.get<Iproduct>(`${environment.APIURL}/products/${id}`)
  }

  getProductsbycatid(catid:number):Observable<Iproduct[]>{
    return this.httpaClient.get<Iproduct[]>(`${environment.APIURL}/products?CateogryID=${catid}`)
  }

  addNewProduct(p:Iproduct):Observable<Iproduct>
  {
    // return this.httpaClient.post<Iproduct>(`${environment.APIURL}/products`,p,this.httpHeader);
    return this.httpaClient.post<Iproduct>(`${environment.APIURL}/products`,JSON.stringify(p),this.httpHeader);
  }
  
 deleteProduct(id: number): Observable<{}> {
  const url = `${environment.APIURL}/products/${id}`;
  return this.httpaClient.delete(url);
}
updateProduct(product: any): Observable<any> {
  const url = `${environment.APIURL}/products/${product.id}`;
  return this.httpaClient.put(url, product);
}
}
