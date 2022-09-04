import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { AddPeoductComponent } from './add-peoduct/add-peoduct.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { routing } from './router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import ProductService from './services/productService';
import { MyHighlightDirective } from './directive/my-highlight.dirctive';
import { ShekelCurrencyPipe } from './pipes/shekelCurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ItemProductComponent,
    AddPeoductComponent,
    DetailProductComponent,
    MyHighlightDirective,
    ShekelCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
