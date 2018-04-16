import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ImageViewerController } from 'ionic-img-viewer';

import { ActionSheetController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { storage, initializeApp} from "firebase";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {LoginPage} from '../login/login';
// import { PhotoLibrary } from '@ionic-native/photo-library';


@IonicPage(
{
  name: 'profile',
  segment: 'app'
}
)
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

_imageViewerCtrl: ImageViewerController;

arrData = []
myInput
base64Image

profileData: FirebaseObjectObservable<Profile>

constructor(private afAuth: AngularFireAuth, private toast: ToastController,
  private afDatabase: AngularFireDatabase, private camera: Camera,
  // private photoLibrary: PhotoLibrary,

  public actionSheetCtrl: ActionSheetController, imageViewerCtrl: ImageViewerController, private fdb: AngularFireDatabase) {
  this._imageViewerCtrl = imageViewerCtrl;
  // this.fdb.list('/people/').subscribe(_data=>{
  //   this.arrData = _data;
    // console.log(this.arrData);
  // });

}

ionViewWillLoad()
{
  this.afAuth.authState.take(1).subscribe(data => {
    if(data && data.email && data.uid){
      this.toast.create({
        message: `Welcome to Follow Up, ${data.email}`,
        duration: 3000
      }).present();
      // var database = firebase.database();
      // save the user's profile into Firebase so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      // function writeUserData(userId, name, email, imageUrl) {
      //
      // }
        this.profileData = this.afDatabase.object(`profile / ${data.uid}`);
    }
    else{
      this.toast.create({
        message: `Your authentication details could not be found`,
        duration: 3000
      }).present();
    }
  })
}
  //   buttonSave(){
  //       this.fdb.list('/people/').push(this.myInput);
  // }
  showImage(myImage) {
      const imageViewer = this._imageViewerCtrl.create(myImage);
      imageViewer.present();

}
// async takePhoto(){
//
// this.photoLibrary.requestAuthorization().then(() => {
//   this.photoLibrary.getLibrary().subscribe({
//     next: library => {
//       library.forEach(function(libraryItem) {
//         console.log(libraryItem.id);          // ID of the photo
//         console.log(libraryItem.photoURL);    // Cross-platform access to photo
//         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
//         console.log(libraryItem.fileName);
//         console.log(libraryItem.width);
//         console.log(libraryItem.height);
//         console.log(libraryItem.creationDate);
//         console.log(libraryItem.latitude);
//         console.log(libraryItem.longitude);
//         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
//       });
//     },
//     error: err => { console.log('could not get photos'); },
//     complete: () => { console.log('done getting photos'); }
//   });
// })
// .catch(err => console.log('permissions weren\'t granted'));
//
// }
async takePhoto(){

      try{
        const options : CameraOptions = {
          quality: 50,
          targetHeight: 600,
          targetWidth: 600,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }

        const result = await this.camera.getPicture(options);
        const image = `data:image/jpeg;base64, ${result}`;
        const pictures = storage().ref('photos/users/profilepics/');
        pictures.putString(image, 'data_url');
        this.base64Image = image;
      }
      catch(err)
      {
        console.error(err);
      }

    }
}
