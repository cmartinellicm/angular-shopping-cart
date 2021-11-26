import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productTitle: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
