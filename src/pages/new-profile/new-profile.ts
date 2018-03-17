import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the NewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-profile',
  templateUrl: 'new-profile.html',
})
export class NewProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,

    public navCtrl: NavController, public navParams: NavParams) {
  }

  create(){
    this.afAuth.authState.take(1).subscribe(auth=>{
        this.afDatabase.list('/profile/${auth.uid}').push(this.profile)
        .then(() => this.navCtrl.push('ProfilePage'));
    })
  }

}
