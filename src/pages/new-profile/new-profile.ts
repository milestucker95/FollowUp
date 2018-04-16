import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../../models/user";

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
  // user = {} as User;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,

    public navCtrl: NavController, public navParams: NavParams) {
  }

  create(){
    this.afAuth.authState.take(1).subscribe(auth=>{
      // firebase.database().ref('profile/' + auth.uid).set({
      //   user_id: auth.uid,
      //   email: auth.email
      //   //some more user data
      // });

        this.afDatabase.object(`profile / ${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot("profile"));


    })



  }

}
