import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ConnectPage } from '../pages/connect/connect';
// import { ListPage } from '../pages/list/list';
import {ContactPage} from '../pages/contacts/contacts';
import {LoginPage} from '../pages/login/login';
import {EventsPage} from '../pages/events/events';
import {ProfilePage} from '../pages/profile/profile';
import {MessagesPage} from '../pages/messages/messages';
import {ContactProfilePage} from '../pages/contactprofile/contactprofile';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Ionic2RatingModule } from 'ionic2-rating';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import md5 from 'crypto-md5';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "",
 authDomain: "",
 databaseURL: "",
 storageBucket: "",
 messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    ContactPage,
    ConnectPage,
    LoginPage,
    ProfilePage,
    MessagesPage,
    ContactProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicImageViewerModule,
    Ionic2RatingModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    ContactPage,
    ConnectPage,
    LoginPage,
    ProfilePage,
    MessagesPage,
    ContactProfilePage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
