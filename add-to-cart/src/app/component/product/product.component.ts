import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList : any;
  constructor(private api:ApiService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;


      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      })
    })
  }


  addToCart(item:any) {
    this.cartservice.addTocart(item);
  }
}
