import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import ProductService from '../services/productService';
import { ValidateImg } from '../validators/image.validator';
import { ValidateUrl } from '../validators/url.validator';


@Component({
  selector: 'app-add-peoduct',
  templateUrl: './add-peoduct.component.html',
  styleUrls: ['./add-peoduct.component.css']
})
export class AddPeoductComponent implements OnInit {

  newProduct: Product = new Product();

  newItemFrom: FormGroup = new FormGroup({
    name: new FormControl("new name", [Validators.required, Validators.minLength(1), Validators.maxLength(16)]),
    description: new FormControl("new description", [Validators.required]),
    image: new FormControl("", [ValidateUrl, ValidateImg]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    city: new FormControl("new city", [Validators.required, Validators.minLength(1)]),
    tel: new FormControl("", [Validators.required, Validators.pattern('[0-9]{8,13}')])
  });

  saveForm() {
    let name = this.newItemFrom.controls["name"].value;
    let description = this.newItemFrom.controls["description"].value;
    let image = this.newItemFrom.controls["image"].value;
    let price = this.newItemFrom.controls["price"].value;
    let city = this.newItemFrom.controls["city"].value;
    let tel = this.newItemFrom.controls["tel"].value;
    let product = new Product(0, name, description, image, price, city, tel);
    if (this.newItemFrom.valid) {
      this.productService.post(product).subscribe(data => {
        this.router.navigateByUrl("/");
      })
    }
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addItemHandler() {
    this.productService.post(this.newProduct)
      .subscribe(data => { this.router.navigateByUrl("/"); })
  }
}
