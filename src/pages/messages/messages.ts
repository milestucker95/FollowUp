import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['Miles', 'John', 'Timmy', 'Darius', 'Cameron', 'Darian',
    'Brandon', 'Ashley', 'Amanda', 'Christian'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: this.icons[i]

      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MessagesPage, {
      item: item
    });
  }
}
