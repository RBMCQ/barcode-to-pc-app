import { Injectable } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { ScanSessionModel } from '../models/scan-session.model'
import { ScanModel } from '../models/scan.model'
import { ServerProvider } from '../providers/server'
import { ScanSessionPage } from '../scan-session/scan-session'

/*
  Generated class for the CameraScanner provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CameraScannerProvider {

  constructor() { }

  scan(): Promise<ScanModel> {
    return new Promise((resolve, reject) => {
      BarcodeScanner.scan({
        "showFlipCameraButton": true, // iOS and Android
        "prompt": "Place a barcode inside the scan area", // supported on Android only
        "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }).then((scan) => {
        if (scan && scan.text) {
          resolve(scan);
        }
      }, (err) => {
        reject(err)
      });
    });
  } // scan
}