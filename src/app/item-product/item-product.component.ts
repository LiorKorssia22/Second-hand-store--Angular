import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import ProductService from '../services/productService';

@Component({
  selector: 'item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  @Input() product: any;
  products: Product[] = [];
  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }
  goToDetails(id: number){
    this.router.navigateByUrl("/detail/" + id);
  }

  Purchase() {
    this.productService.delete(this.product.id).subscribe(data => {
      this.ondelete.emit(this.product.id)
      this.router.navigateByUrl("");
    },
    error => alert(error))
  }
}
