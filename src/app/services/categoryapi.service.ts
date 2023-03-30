import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryapiService {

  constructor(private httpaClient:HttpClient) { }
  getAllCategories():Observable<ICategory[]>{
    this.httpaClient.get<ICategory[]>('http://localhost:3000/categories')
  }
}
