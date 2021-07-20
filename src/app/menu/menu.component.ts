import { Component, OnInit } from '@angular/core';

import { Item } from '../item'
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  restaurant_name: string = 'Test Cafe'
  menu_items: Item[] = []

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void {
    this.menu_items = this.MenuService.getItems()
  }

  onSelect(item: Item): void {
    this.MenuService.addItem(item)
  }

}
