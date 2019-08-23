import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable()
export class PrintProvider {

    constructor(private btSerial: BluetoothSerial, private alertCtrl: AlertController) {

    }

    searchBt() {
        return this.btSerial.list();
    }

    connectBT(address) {
        return this.btSerial.connect(address);

    }



    print(address, printData) {

        let xyz = this.connectBT(address).subscribe(data => {
            this.btSerial.write(printData).then(async dataz => {
                let mno = await this.alertCtrl.create({

                    header: "Impressão OK!",
                    buttons: ['OK']
                });
                await mno.present();

                xyz.unsubscribe();
            }, async errx => {
                let mno = await this.alertCtrl.create({
                    header: "Falha na impressão " + errx,
                    buttons: ['OK']
                });
                await mno.present();
            });
        }, async err => {
            let mno = await this.alertCtrl.create({
                header: "ERROR " + err,
                buttons: ['OK']
            });
            await mno.present();
        });

    }

}