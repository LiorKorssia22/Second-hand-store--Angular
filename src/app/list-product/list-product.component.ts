import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import ProductService from '../services/productService';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];
  sortBool: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.get().subscribe((response) => {
    //     this.products = response as Product[];
    // });

    this.productService.get()
    .subscribe((data)=> {
      let products = data as Product[];
      products = products.sort((a, b)=> <any>new Date(a.dateOfRelease)- <any>new Date(b.dateOfRelease));
      this.products = products;                    
    });
  }

  onItemDeleteHandler(id: any) {
    this.products = this.products.filter(product => product.id != id);
  }

  sortPrice() {
    if(this.sortBool === false) {
      this.products.sort((a, b) => b.price - a.price);
      this.sortBool = true;
    }
    else {
      this.products.sort((a, b) => a.price - b.price);
      this.sortBool = false;
    }
  }
  sortDate() {
    if(this.sortBool === false) {
      this.products.sort((a, b) => <any>new Date(b.dateOfRelease)- <any>new Date(a.dateOfRelease));
      this.sortBool = true;
    }
    else {
      this.products.sort((a, b) => <any>new Date(a.dateOfRelease)- <any>new Date(b.dateOfRelease));
      this.sortBool = false;
    }
  }

}
