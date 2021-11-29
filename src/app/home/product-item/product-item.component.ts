import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productId: number = 0;
  @Input() productTitle: string = '';
  @Input() shortDescription: string = '';
  @Input() price: number = 0;
  @Input() imgUrl: string = '';

  constructor() {}

  ngOnInit(): void {}

  addToCart(productId: number) {
    console.log(productId, this.productTitle);
    // localStorage.setItem()
  }
}
