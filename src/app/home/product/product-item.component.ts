import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from './../../models/interfaces';
import { CartStorageService } from 'src/app/cart-storage.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = {
    productId: 0,
    productTitle: '',
    shortDescription: '',
    fullDescription: '',
    price: 0,
    imgUrl: '',
  };

  constructor(private cartStorageService: CartStorageService) {}

  ngOnInit(): void {}

  addToCart(product: IProduct): void {
    this.cartStorageService.set('cartProducts', product);
  }
}
