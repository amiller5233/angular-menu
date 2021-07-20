import { Component, OnInit } from '@angular/core';

import { Item, CartItem } from '../item'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart_items?: CartItem[] = []
  total?: number = 0

  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.cart_items = this.CartService.getItems()
    this.total = this.CartService.total
  }

}
