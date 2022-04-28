import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// url = "https://fakestoreapi.com/products";
  constructor(private http : HttpClient) { }

  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res:any)=> {
      return res;
    }))
  }
}
