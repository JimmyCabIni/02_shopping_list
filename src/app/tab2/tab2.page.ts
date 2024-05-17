import { Component } from '@angular/core';
import {ShoppingItemsService} from "../services/shopping-items.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;

  constructor(
    private shoppingList: ShoppingItemsService
  ) {}

  addItem() {
    console.log(this.item);

    if (!this.shoppingList.existsItem(this.item)){
      this.shoppingList.addItem(this.item);
      this.item = '';
      console.log(this.shoppingList.items);

    } else {

    }
  }
}
