import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ImageViewerController } from 'ionic-img-viewer';

import { ActionSheetController, IonicPage } from 'ionic-angular';

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

constructor(public actionSheetCtrl: ActionSheetController, imageViewerCtrl: ImageViewerController) {
  this._imageViewerCtrl = imageViewerCtrl;
}

  showImage(myImage) {
      const imageViewer = this._imageViewerCtrl.create(myImage);
      imageViewer.present();

}

}
