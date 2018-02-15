import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['BEHackathon', 'MicrosoftNetworkingEvent', 'Gala', 'SXSW', '100BlackmenAtlantaEvent', 'MorehouseAlumnievent',
    'NSBENationalConvention'];

    this.items = [];
    for (let i = 1; i < 7; i++) {
      this.items.push({
        title: this.icons[i],
        note: '0' + i + '/01/2018'
        // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(EventsPage, {
      item: item
    });
  }
}
