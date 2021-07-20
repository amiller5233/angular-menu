import { Injectable } from '@angular/core';

import { Item, CartItem } from './item'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart_items: CartItem[] = []

  constructor() { }

  getItems(): CartItem[] {
    return this.cart_items
  }

  addItem(item:Item): void {
    var exists = this.cart_items.find(function(el) { return el.item === item})
    if (exists) {
      exists.quantity++
    } else {
      var new_item: CartItem = {
        item: item,
        quantity: 1
      }
      this.cart_items.push(new_item)
    }
  }

  get total(): number {
    var total = 0
    for (let item of this.cart_items) {
      total += item.item.price * item.quantity
    }
    return total
  }

}
