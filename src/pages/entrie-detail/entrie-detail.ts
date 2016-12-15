import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Entrie } from '../../models/entrie';
import { EntriesService } from '../../providers/entries';

/*
  Generated class for the EntrieDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entrie-detail',
  templateUrl: 'entrie-detail.html'
})
export class EntrieDetail {
  entrie: Entrie[];
  index: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, private entriesService: EntriesService, public alertCtrl: AlertController) {
    this.index = navParams.get('index');
    entriesService.loadDetail(this.index).subscribe(entrie => {
      this.entrie = entrie;
    })
  }

  ionViewDidLoad() {
  }

    showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Supervisor',
      message: "Sign in to insert your signature",
      inputs: [
        {
          name: 'username',
          placeholder: 'username'
        },
        {
          name: 'password',
          placeholder: 'password'
        }
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('Login');
          }
        }
      ]
    });
    prompt.present();
  }

}
