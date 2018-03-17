import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ImageViewerController } from 'ionic-img-viewer';

import { ActionSheetController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

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

constructor(public actionSheetCtrl: ActionSheetController, imageViewerCtrl: ImageViewerController, private fdb: AngularFireDatabase) {
  this._imageViewerCtrl = imageViewerCtrl;
  this.fdb.list('/people/').subscribe(_data=>{
    this.arrData = _data;
    // console.log(this.arrData);
  });

}
    buttonSave(){
        this.fdb.list('/people/').push(this.myInput);
  }
  showImage(myImage) {
      const imageViewer = this._imageViewerCtrl.create(myImage);
      imageViewer.present();

}

}
