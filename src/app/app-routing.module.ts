import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DemoRequestComponent } from './components/demo-request/demo-request.component';

const routes: Routes = [
{ path: "", redirectTo: "/products", pathMatch: "full" },
{
  path: "products",
  component: ProductsComponent
},{
  path: "DemoRequest",
  component: DemoRequestComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = [ProductsComponent,DemoRequestComponent];