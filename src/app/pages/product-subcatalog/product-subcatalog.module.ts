import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductSubcatalogPage } from './product-subcatalog.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSubcatalogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductSubcatalogPage]
})
export class ProductSubcatalogPageModule {}
