import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';

/**
 * Generated class for the VideosCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos-curso',
  templateUrl: 'videos-curso.html',
})
export class VideosCursoPage {

  intro: string = "cap1";
  isAndroid: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform,public loadingCtrl: LoadingController) {
    this.isAndroid = platform.is('android');
  }

  cargar(){
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosCursoPage');
  }

}
