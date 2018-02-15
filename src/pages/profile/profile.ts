import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ImageViewerController } from 'ionic-img-viewer';

import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

// options: BarcodeScannerOptions;
//   constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {
//
//   }
//
// async scanBarcode(){
//
//   const results = await this.barcode.scan();
//   console.log(results);
// }

_imageViewerCtrl: ImageViewerController;

constructor(public actionSheetCtrl: ActionSheetController, imageViewerCtrl: ImageViewerController) {
  this._imageViewerCtrl = imageViewerCtrl;
}

  showImage(myImage) {
      const imageViewer = this._imageViewerCtrl.create(myImage);
      imageViewer.present();

      // setTimeout(() => imageViewer.dismiss(), 1000);
      // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
}

// presentActionSheet(myImage) {
//
//     let actionSheet = this.actionSheetCtrl.create({
//       title: 'Modify your album',
//       buttons: [
//         {
//           text: 'View Card',
//           role: 'viewcard',
//           handler: () => {
//             // console.log('Destructive clicked');
//             const imageViewer = this._imageViewerCtrl.create(myImage);
//             imageViewer.present();
//           }
//         },{
//           text: 'Edit',
//           handler: () => {
//             // console.log('Archive clicked');
//           }
//         }
//       ]
//     });
//     actionSheet.present();
//   }

}
