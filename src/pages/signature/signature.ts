import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { EntrieDetail } from '../entrie-detail/entrie-detail';
/*
  Generated class for the Signature page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var SignaturePad;


@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html'
})
export class SignaturePage {
  param: number;
  signaturePad: any;
  signature: any;
  signatures: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, public alertCtrl: AlertController) {
    this.param = navParams.get('param');
    if( ! window.localStorage.getItem('signatures') ){
        window.localStorage.setItem('signatures', JSON.stringify([]) ); 
    }
  }

  ionViewDidLoad() {
    let canvas = document.querySelector('#signature');
    console.log(canvas)
    this.signaturePad = new SignaturePad(canvas);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Your signature was registered',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            let index = this.param;
            this.navCtrl.push(EntrieDetail, {index});
          }
        }
      ]
    });
    alert.present();
  }
  showErro() {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Preencha seu ID',
      buttons: ['OK']
    });
    alert.present();
  }

  saveSignature(supId){
    if ( supId == '' ){
      this.showErro();
      return
    }
    
    let data = this.signaturePad.toDataURL('image/png');

    this.signature = {
      entrie: this.param,
      id: supId,
      dataurl: data
    }

    this.signatures = JSON.parse(window.localStorage.getItem('signatures'));

    this.signatures.push(this.signature);

    window.localStorage.setItem('signatures', JSON.stringify(this.signatures) );

    this.showAlert();
  }

  clearSignature(){
    this.signaturePad.clear();
  }
}
