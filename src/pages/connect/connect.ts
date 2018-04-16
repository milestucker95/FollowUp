import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
// import {NgxQRCodeModule} from 'ngx-qrcode2';



@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html'
})
export class ConnectPage {

options: BarcodeScannerOptions;

  // constructor(private barcode: BarcodeScanner, public navCtrl: NavController,
  // private qrScanner: QRScanner) {
  //
  // }

  constructor(private qrScanner: QRScanner) { }


// async scanBarcode(){
//
//   const results = await this.barcode.scan();
//   console.log(results);
// }

// Optionally request the permission early
//   this.qrScanner.prepare().then((status: QRScannerStatus) => {
//      if (status.authorized) {
//        // camera permission was granted
//
//
//        // start scanning
//        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//          console.log('Scanned something', text);
//
//          this.qrScanner.hide(); // hide camera preview
//          scanSub.unsubscribe(); // stop scanning
//        });
//
//        // show camera preview
//        this.qrScanner.show();
//
//        // wait for user to scan something, then the observable callback will be called
//
//      } else if (status.denied) {
//        // camera permission was permanently denied
//        // you must use QRScanner.openSettings() method to guide the user to the settings page
//        // then they can grant the permission from there
//      } else {
//        // permission was denied, but not permanently. You can ask for permission again at a later time.
//      }
//   })
//   .catch((e: any) => console.log('Error is', e));
//
 }
