import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactPage {
  @ViewChild(Nav) nav: Nav;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;
  contacts: Array<{title: string, component: any}>;

// connections: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

  // this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['Miles', 'John', 'Timmy', 'Darius', 'Cameron', 'Darian',
    'Brandon', 'Ashley', 'Amanda', 'Christian'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: this.icons[i]

      });
    }
    this.selectedItem = navParams.get('p');

    // this.contacts = [
    //   // { title: 'List', component: ListPage },
    //   {title: 'Miles', component: ContactProfilePage}
    //
    //
    // ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ContactPage, {
      item: item
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
