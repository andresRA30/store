import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { tap } from 'rxjs/operators';
import { Cart } from '../interfaces/cart.interface';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
    .title{
      text-align: center;
    }
    
    `
  ]
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  private static subject = new Subject<any>();

  quantity: number = 0;
  orderBy: boolean = false;
  carts: Cart[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(tap(console.log))
      .subscribe((resp) => {

        this.products = resp.data;

      }); console.log('holaaaa');
  }

  public static getSubject(): Observable<any> {
    return ListComponent.subject.asObservable();
  }



  Add(id: string, quantity: number) {
    if (quantity < 1) {
      return;
    }
    this.productService.insertCartItem(id, quantity).pipe(tap(console.log)).subscribe(data => {
      this.carts = data.cart;
      ListComponent.subject.next(this.carts);
    });



  }
  lowToHigh() {
    this.products.sort((a, b) => a.price.raw - b.price.raw);
  }
  HighToLow() {
    this.products.sort((a, b) => b.price.raw - a.price.raw);
  }

}
