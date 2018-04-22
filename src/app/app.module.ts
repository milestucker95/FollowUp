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
import {FIREBASE_CONFIG} from './app.firebase.config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import md5 from 'crypto-md5';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPageModule} from '../pages/login/login.module';
import {ProfilePageModule} from '../pages/profile/profile.module';
// import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {Camera} from "@ionic-native/camera";
import { ImageProvider } from '../providers/image/image';
import { PreloaderProvider } from '../providers/preloader/preloader';
import { DatabaseProvider } from '../providers/database/database';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
// import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

// export const firebaseConfig = {
//     apiKey: "AIzaSyCNZ7NFZRM90Qxla8olQl-phdVvuH1RHHw",
//     authDomain: "followup-33af7.firebaseapp.com",
//     databaseURL: "https://followup-33af7.firebaseio.com",
//     projectId: "followup-33af7",
//     storageBucket: "followup-33af7.appspot.com",
//     messagingSenderId: "892514328340"
//   };

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    ContactPage,
    ConnectPage,
    MessagesPage,
    ContactProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    ProfilePageModule,
    IonicImageViewerModule,
    Ionic2RatingModule
    // HttpModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    ContactPage,
    ConnectPage,
    ProfilePage,
    MessagesPage,
    ContactProfilePage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ImageProvider,
    PreloaderProvider,
    DatabaseProvider,
    PhotoLibrary,
    AngularFireDatabase
    // FirebaseServiceProvider
  ]
})
export class AppModule {}
