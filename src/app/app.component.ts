import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConnectPage } from '../pages/connect/connect';
// import { ListPage } from '../pages/list/list';
import {ContactPage} from '../pages/contacts/contacts';
import {LoginPage} from '../pages/login/login';
import {EventsPage} from '../pages/events/events';
import {ProfilePage} from '../pages/profile/profile';
import {MessagesPage} from '../pages/messages/messages';
import {ContactProfilePage} from '../pages/contactprofile/contactprofile';

import md5 from 'crypto-md5';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'List', component: ListPage },
      {title: 'Contacts', component: ContactPage},
      {title: 'Events', component: EventsPage},
      { title: 'Connect', component: ConnectPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Messages', component: MessagesPage },
      {title: 'Contacts Page Example', component: ContactProfilePage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
