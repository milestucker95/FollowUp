import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { User } from "../../models/user";
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public menu: MenuController,

    public navCtrl: NavController, public navParams: NavParams) {
  }


  async register(user: User){
    this.menu.enable(false, 'menuid');

    try{
      // user.new = true;
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

        if(result && user.confirmedPassword == user.password)
        {
          this.navCtrl.push("NewProfilePage");
        }
    }
    catch(err)
    {
      console.error(err);

      if(user.email ==null || user.password == null || user.confirmedPassword == null)
      {
        this.toast.create({
          message: `Please enter all credentials`,
          duration: 3000
        }).present();
      }

      else if (user.password != user.confirmedPassword)
      {
        this.toast.create({
          message: `Password and confirmed password don't match`,
          duration: 3000
        }).present();
      }
      else{
      this.toast.create({
        message: `Your email is already in use or, your authentication details are invalid`,
        duration: 3000
      }).present();
    }


    }
  }

  async login(){
    this.navCtrl.setRoot("LoginPage");
  }

}
