import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-gerar-e-ler-qrcode',
  templateUrl: './gerar-e-ler-qrcode.page.html',
  styleUrls: ['./gerar-e-ler-qrcode.page.scss'],
})
export class GerarELerQrcodePage implements OnInit {


  //npm i ngx-qrcode2 --save
  //ionic cordova plugin add phonegap-plugin-barcodescanner
  //npm install @ionic-native/barcode-scanner


  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text + " - code " + barcodeData.format
    })
  }

}
