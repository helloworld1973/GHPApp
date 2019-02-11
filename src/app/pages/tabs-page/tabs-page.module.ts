import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPagePage } from './tabs-page.page';

import { AboutPage } from '../about/about.page';
import { BlogPage } from '../blog/blog.page';
import { NewsPage } from '../news/news.page';
import { ProductPage } from '../product/product.page';
import { ProductSubcatalogPage } from '../product-subcatalog/product-subcatalog.page';
import { ProductSingleDetailsPage } from '../product-single-details/product-single-details.page';

import { AboutPageModule } from '../about/about.module';
import { BlogPageModule } from '../blog/blog.module';
import { NewsPageModule } from '../news/news.module';
import { ProductPageModule } from '../product/product.module';
import { ProductSubcatalogPageModule } from '../product-subcatalog/product-subcatalog.module';
import { ProductSingleDetailsPageModule } from '../product-single-details/product-single-details.module';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPagePage,
    children: [
      // tab one
        {
          path: 'product',
          component: ProductPage,
          outlet: 'product'
        },
        {
            path: 'product-subcatalog/:catalogName',
            component: ProductSubcatalogPage,
            outlet: 'product'
        },
        {
            path: 'product-single-details/:singleDetailsId',
            component: ProductSingleDetailsPage,
            outlet: 'product'
        },
      // tab two
        {
          path: 'news',
          component: NewsPage,
          outlet: 'news'
        },
      // tab three
        {
          path: 'blog',
          component: BlogPage,
          outlet: 'blog'
        },
      // tab four
        {
          path: 'about',
          component: AboutPage,
          outlet: 'about'
        }
    ]
  }
];

@NgModule({
  imports: [
    ProductPageModule,
    ProductSubcatalogPageModule,
    ProductSingleDetailsPageModule,
    BlogPageModule,
    AboutPageModule,
    NewsPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
