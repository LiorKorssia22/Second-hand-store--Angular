import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPeoductComponent } from './add-peoduct/add-peoduct.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const appRouters: Routes = [
  {path: "", component: ListProductComponent},
  {path: "add", component: AddPeoductComponent},
  {path: "detail/:id", component: DetailProductComponent}
];

export const routing = RouterModule.forRoot(appRouters);
