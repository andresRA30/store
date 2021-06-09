import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    ListComponent,
    CartComponent,
    HomeComponent
  ],
  exports: [
    ListComponent,
    CartComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,

  ]
})
export class ProductsModule { }
