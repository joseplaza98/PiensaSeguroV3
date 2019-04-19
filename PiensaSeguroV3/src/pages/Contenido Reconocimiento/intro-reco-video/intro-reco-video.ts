import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AprendeRecoPage } from '../aprende-reco/aprende-reco';

/**
 * Generated class for the IntroRecoVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-reco-video',
  templateUrl: 'intro-reco-video.html',
})
export class IntroRecoVideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAprendeReco(){
    this.navCtrl.push(AprendeRecoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroRecoVideoPage');
  }

}
