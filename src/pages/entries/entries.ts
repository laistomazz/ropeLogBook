import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Entrie } from '../../models/entrie';
import { EntriesService } from '../../providers/entries';
import { EntrieDetail } from '../entrie-detail/entrie-detail';
/*
  Generated class for the Entries page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entries',
  templateUrl: 'entries.html'
})
export class Entries {
  entries: Entrie[];

  constructor(public navCtrl: NavController, private entriesService: EntriesService) {
    entriesService.load().subscribe(entries => {
      this.entries = entries;
    })
  }

  ionViewDidLoad() {
  }

  goEntrieDetail(index: number) {
    this.navCtrl.push(EntrieDetail, {index});
  }

}