import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productTitle: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
