import { IProduct } from './models/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  private storage: Storage;
  private cartItemsList: IProduct[] = [];
  private existingProducts: any;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: IProduct): void {
    this.existingProducts = JSON.parse(this.storage.getItem(key) || '{}'); // verifica se existe entrada no localStorage

    if (!this.existingProducts.length) {
      this.cartItemsList.push(value);
    } else {
      this.cartItemsList = [...this.existingProducts, value];
    }

    this.storage.setItem(key, JSON.stringify(this.cartItemsList));
  }

  get(key: string): any {
    return this.storage.getItem(key);
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }
}

// https://warcontent.com/angular-localstorage/
