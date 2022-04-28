import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList : any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
    })
  }

}
