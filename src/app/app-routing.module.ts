import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tabs-page/tabs/(product:product)', pathMatch: 'full' },
  { path: 'tabs-page', loadChildren: './pages/tabs-page/tabs-page.module#TabsPagePageModule' },
  { path: 'product-single-details', loadChildren: './pages/product-single-details/product-single-details.module#ProductSingleDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
