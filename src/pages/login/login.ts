import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,MenuController } from 'ionic-angular';
import { User } from "../../models/user";
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { Profile } from "../../models/profile";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

user = {} as User;
profile = {} as Profile;
username = '';

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public menu:MenuController,

    public navCtrl: NavController, public navParams: NavParams) {

  }

  // ionViewWillLoad()
  // {
  //   this.afAuth.authState.take(1).subscribe(data => {
  //     if(data && data.email && data.uid){
  //
  //     }
  //   })
  // }

  async login(user: User){
    this.menu.enable(false, 'menuid');
    try{
    const  result =  await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

    if(result)
    {
      this.toast.create({
        message: `Welcome to Follow Up, ${user.email}`,
        duration: 3000
      }).present();
      this.navCtrl.push("profile");
      this.menu.enable(true,'menuid');

      // this.profileData = this.afDatabase.object(`profile / ${data.uid}`);
    }
    // else{
    //   this.toast.create({
    //     message: `Your authentication details could not be found`,
    //     duration: 3000
    //   }).present();
    //
    //   // let info = this.auth.getUserInfo();
    //   //   if(info.new)
    //   //   {
    //   //     this.navCtrl.push("NewProfilePage");
    //   //   }
    //     // else if (!info.new) {
    //     //   this.navCtrl.setRoot("profile");
    //     // }
    // }
  }
  catch(err){
    console.error(err);
    this.toast.create({
      message: `Your authentication details could not be found`,
      duration: 3000
    }).present();
  }

  }

  register(){
    this.navCtrl.push("RegisterPage");
  }

  openMenu(){
    this.menu.open();
  }

  closeMenu(){
    this.menu.close();
  }

}
