import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../providers/data-service';

@Component({
  selector: 'app-product-subcatalog',
  templateUrl: './product-subcatalog.page.html',
  styleUrls: ['./product-subcatalog.page.scss'],
})
export class ProductSubcatalogPage implements OnInit {
    subcatalogProducts: any[] = [];

  constructor(
      private dataService: DataService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() { }

    getProductSubcatalog(): void {
        this.dataService.getProductSubcatalog().subscribe(subcatalogProducts => this.subcatalogProducts = subcatalogProducts);
    }

  ionViewWillEnter() {


    }


}
