import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import {IntroRecoPage} from '../Contenido Reconocimiento/intro-reco/intro-reco';
import {AprendeRecoPage} from '../Contenido Reconocimiento/aprende-reco/aprende-reco';
import {ComandosRecoPage} from '../Contenido Reconocimiento/comandos-reco/comandos-reco';
import {RetosRecoPage} from '../Contenido Reconocimiento/retos-reco/retos-reco';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ManualPage } from '../manual/manual';
/**
 * Generated class for the SelecTematicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-tematica',
  templateUrl: 'selec-tematica.html',
})
export class SelecTematicaPage {

  intro: string = "intro1";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.isAndroid = platform.is('android');
  }

  aHome(){
    this.navCtrl.push(HomePage);
  }

  aManual(){
    this.navCtrl.push(ManualPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecTematicaPage');
  }

  aRetosReco() {
    this.navCtrl.push(RetosRecoPage);
  }

  aIntroReco(){
    this.navCtrl.push(IntroRecoPage);
  }

  aprendeReco() {
    this.navCtrl.push(AprendeRecoPage);
   
      const alert = this.alertCtrl.create({
        title: 'Recomendación',
        subTitle: 'Al iniciar cada capitulo, termina todos sus submodulos antes de continuar al siguiente capítulo',
        buttons: ['OK']
      });
      alert.present();
    
  }

  comandosReco() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(ComandosRecoPage);
  }

  retosReco() {
    this.navCtrl.push(RetosRecoPage);
  }

}
