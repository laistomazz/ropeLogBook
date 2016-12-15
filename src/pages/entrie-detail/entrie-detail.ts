import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private navParams: NavParams, private entriesService: EntriesService) {
    this.index = navParams.get('index');
    entriesService.loadDetail(this.index).subscribe(entrie => {
      this.entrie = entrie;
    })
  }

  ionViewDidLoad() {
  }

}
