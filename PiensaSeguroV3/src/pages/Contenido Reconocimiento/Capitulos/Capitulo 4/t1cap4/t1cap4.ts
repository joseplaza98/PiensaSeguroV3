import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Seccionescap4Page } from '../seccionescap4/seccionescap4';

/**
 * Generated class for the T1cap4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap4',
  templateUrl: 't1cap4.html',
})
export class T1cap4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap4Page');
  }

  aSeccionCap4(){
    this.navCtrl.push(Seccionescap4Page);
  }
}
