import { IProduct } from './../../models/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';

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
  // cartProducts: IProduct[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  addToCart(product: IProduct): void {
    console.log(product);
    this.storageService.set('cartProducts', product);
  }
}
