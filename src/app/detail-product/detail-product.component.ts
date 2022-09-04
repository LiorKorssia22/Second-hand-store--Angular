import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import ProductService from '../services/productService';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id: string = "";

  product: Product = new Product();
  products: Product[] = [];



  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {      
        this.id = params["id"];
        this.productService.getById(parseInt(this.id)).subscribe((data)=>{
          this.product = data as Product;
        })
    });
  }

  deleteHandler(id: number){
    this.productService.delete(id)
                    .subscribe(data=> {
                      this.products = this.products.filter(item => item.id != id);
                       this.router.navigateByUrl("/");

                    },
                    error => alert(error))
  }

}
