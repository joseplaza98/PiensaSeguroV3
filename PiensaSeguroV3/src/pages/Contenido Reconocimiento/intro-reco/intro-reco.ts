import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { IntroRecoVideoPage } from '../intro-reco-video/intro-reco-video';



/**
 * Generated class for the IntroRecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-reco',
  templateUrl: 'intro-reco.html',
})
export class IntroRecoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  }


  

  aIntroRecoVideo() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(IntroRecoVideoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroRecoPage');
  }

}
