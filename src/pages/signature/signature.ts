import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Signature page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html'
})
export class SignaturePage {
  index: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, public alertCtrl: AlertController) {
    this.index = navParams.get('index');
    console.log(this.index)
  }

  ionViewDidLoad() {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Your signature was registered',
      buttons: ['OK']
    });
    alert.present();
  }

}
