import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Seccionescap1Page } from '../seccionescap1/seccionescap1';


/**
 * Generated class for the T1cap1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap1',
  templateUrl: 't1cap1.html',
})
export class T1cap1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap1Page');
  }

  aSeccionCap1(){
    this.navCtrl.push(Seccionescap1Page);
  }
}
