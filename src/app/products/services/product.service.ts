import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiKey: string = 'pk_test_2857661cd3b10ce6bbd0304bbac587326fa1831fe4aa2';
  //commercejs
  private servicioUrl: string = 'https://api.chec.io/v1';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {

    const headers = new HttpHeaders().set('X-Authorization', this.apiKey);

    return this.http.get<Product[]>(`${this.servicioUrl}/products`, { headers })
  }

  getCartSubTotal(): Observable<Cart> {

    const headers = new HttpHeaders().set('X-Authorization', this.apiKey);

    return this.http.get<Cart>(`${this.servicioUrl}/carts/cart_roEggMyrD9yY8l`, { headers })

  }
  getCartItems(): Observable<Cart[]> {

    const headers = new HttpHeaders().set('X-Authorization', this.apiKey);

    return this.http.get<Cart[]>(`${this.servicioUrl}/carts/cart_roEggMyrD9yY8l`, { headers })

  }
  insertCartItem(id: string, quantity: number): Observable<Cart[]> {
    const headers = new HttpHeaders().set('X-Authorization', this.apiKey);
    const body = { id: id, quantity: quantity };
    return this.http.post<Cart[]>(`${this.servicioUrl}/carts/cart_roEggMyrD9yY8l`, body, { headers })

  }
  deleteCartItem(id: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Authorization', this.apiKey);
    return this.http.delete<any>(`${this.servicioUrl}/carts/cart_roEggMyrD9yY8l/items/${id}`, { headers })
  }
}
