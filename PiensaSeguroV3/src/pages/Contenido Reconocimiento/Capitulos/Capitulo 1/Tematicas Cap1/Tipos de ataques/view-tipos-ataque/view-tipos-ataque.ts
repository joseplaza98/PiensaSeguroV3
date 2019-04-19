import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewTiposAtaquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-tipos-ataque',
  templateUrl: 'view-tipos-ataque.html',
})
export class ViewTiposAtaquePage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
