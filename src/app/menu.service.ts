import { Injectable } from '@angular/core';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public CartService: CartService) { }

  getItems(): Item[] {
    return ITEMS;
  }

  addItem(item: Item): void {
    this.CartService.addItem(item)
  }
}
