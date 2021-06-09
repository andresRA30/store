
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../interfaces/product.interface';

describe('ProductService', () => {
  let productService: ProductService,
    httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService
      ]
    });
    productService = TestBed.get(ProductService);
    httpTestingController = TestBed.get(HttpTestingController);
  })
  it('should test all products.get', () => {
    const testProduct: Product[] = []

    productService.getProducts().subscribe((products) => {
      expect(testProduct).toBe(products, 'should check products data');
    });

  });
});
