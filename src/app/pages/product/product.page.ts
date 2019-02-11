import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { DataService } from '../../providers/data-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  // products = PRODUCTS; // not correct, will change latere
    products: any[] = [];

  constructor(
      public dataService: DataService,
      public router: Router
  ) { }

  getProducts(): void {
      this.dataService.getProducts().subscribe(products => this.products = products);
  }

  ngOnInit() {

  }

    ionViewDidEnter()  {
        this.getProducts();
      //  this.dataService.getSpeakers().subscribe
      //  ((products: any[]) => {
      //          this.products = products;
      //      }
     //   );
    }

}
