import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Cart } from '../interfaces/cart.interface';
import { tap } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
    `
    .title{
      text-align:center;
    }
.container{

 display: flex;
 justify-content: center;
 align-items: center;

}
  
    `
  ]
})
export class CartComponent implements OnInit {
  id: string = '';
  quantity: string = '0';

  //cart!: Cart;
  items: Cart[] = [];
  total: string = '';
  hayError: boolean = false;
  products: Product[] = [];
  @Output() onLow: EventEmitter<any> = new EventEmitter();
  @Output() onHigh: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService) {
    ListComponent.getSubject().subscribe((response) => {
      this.items = response.line_items;
      this.total = response.subtotal.formatted_with_symbol;
    });
  }

  ngOnInit(): void {

    this.productService.getCartItems()
      .pipe(tap(console.log))
      .subscribe((resp) => {
        this.items = resp.line_items;
        this.total = resp.subtotal.formatted_with_symbol;
        console.log(this.items);
      })

  }

  lowToHigh() {
    this.onLow.emit(this.products)
  }
  HighToLow() {
    this.onHigh.emit(this.products)
  }
  delete(item: Cart) {
    this.productService.deleteCartItem(item.id)
      .subscribe(resp => {
        this.total = resp.cart.subtotal.formatted_with_symbol
      },
        (err) => console.log('Debug:deletefailed', err));

    this.items = this.items.filter(val => val.id !== item.id);

  }
}
