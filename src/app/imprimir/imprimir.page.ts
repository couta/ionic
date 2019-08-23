  //ionic cordova plugin add cordova-plugin-bluetooth-serial
  //npm install @ionic-native/bluetooth-serial


import { Dispositivo } from './dispositivo';
import { Component, OnInit } from '@angular/core';
import { PrintProvider } from '../providers/print/print';





import EscPosEncoder from 'esc-pos-encoder-ionic';
declare var Socket: any;

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.page.html',
  styleUrls: ['./imprimir.page.scss'],
})
export class ImprimirPage implements OnInit {

  //texto = "Teste impressão"
  //adressImpressora = "";

  constructor(private printProvider: PrintProvider) {
    
   }

  ngOnInit() {
    
  }


  public imprimirQRCODE() {
    const encoder = new EscPosEncoder();
    let result = encoder
    .initialize()
    .text('Rafael coutinho')
    .encode() 

    console.log("resultado...:"+result);

    //this.printProvider.print("0F:02:17:70:87:89", result); 
  }



/* 

  public imprimirTexto() {
    
    this.texto +="\n..\n..\n..\n..\n"

    this.printProvider.print("0F:02:17:70:87:89", this.texto);
    
  }

 

  public buscarImpressora(){
    
      this.printProvider.searchBt().then( res =>{
        console.log("entrou")
        if(res != null){
          console.log("nao eh nulo");
          let resultados2: Dispositivo[] = res;
          if(resultados2 != null){
            console.log("resultados2 nao eh nulo");
            console.log("resultados2 nao eh nulo.."+resultados2.length);
            console.log("um...:"+resultados2[0].id + " nome..:"+resultados2[0].name)
            console.log("dois...:"+resultados2[1].id + " nome..:"+resultados2[1].name)
          }else{
            console.log("resultados2 eh nulo");
          }
        }else{
          console.log("eh nulo");
        }
        let resultados: Dispositivo[] = JSON.parse(res);
        console.log("resultado1..:"+resultados[0].id)
        console.log("resultado2..:"+res)
      })
    
    console.log("resultado 0..: "+this.printProvider.searchBt());
  }
 */
}
