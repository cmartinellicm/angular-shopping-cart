import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [
    {
      productTitle: 'Produto 1',
      description: 'Descriçao de produto um',
      price: 12.3,
    },
    {
      productTitle: 'Produto 2',
      description: 'Descriçao de produto dois',
      price: 20.9,
    },
    {
      productTitle: 'Produto 3',
      description: 'Descriçao de produto tres',
      price: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
