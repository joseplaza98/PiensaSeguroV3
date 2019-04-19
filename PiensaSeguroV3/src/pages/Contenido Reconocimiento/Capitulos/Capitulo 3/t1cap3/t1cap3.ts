import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seccionescap3Page } from '../seccionescap3/seccionescap3';

/**
 * Generated class for the T1cap3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap3',
  templateUrl: 't1cap3.html',
})
export class T1cap3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap3Page');
  }

  aSeccionCap3(){
    this.navCtrl.push(Seccionescap3Page);
  }
}
