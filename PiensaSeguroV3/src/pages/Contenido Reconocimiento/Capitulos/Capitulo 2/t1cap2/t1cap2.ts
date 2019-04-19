import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Seccionescap2Page } from '../seccionescap2/seccionescap2';

/**
 * Generated class for the T1cap2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap2',
  templateUrl: 't1cap2.html',
})
export class T1cap2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap1Page');
  }

  aSeccionCap2(){
    this.navCtrl.push(Seccionescap2Page);
  }

  
}

