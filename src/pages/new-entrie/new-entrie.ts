import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NewEntrie page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-entrie',
  templateUrl: 'new-entrie.html'
})
export class NewEntrie {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NewEntriePage Page');
  }

}
