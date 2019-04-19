import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { T1cap3intro1Page } from '../Tematicas Cap 3/Intro Cap 3/t1cap3intro1/t1cap3intro1';
import { Met1NmapCap3Page } from '../Tematicas Cap 3/met1-nmap-cap3/met1-nmap-cap3';
import { Met2NetCatCap3Page } from '../Tematicas Cap 3/met2-net-cat-cap3/met2-net-cat-cap3';
import { View1t1cap2din1Page } from '../../Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view1t1cap2din1/view1t1cap2din1';
import { View2t1cap2din2Page } from '../../Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view2t1cap2din2/view2t1cap2din2';
import { HomePage } from '../../../../home/home';
import { ManualPage } from '../../../../manual/manual';
import { ChatCap3Page } from '../chat-cap3/chat-cap3';
import { ChapterProgress, ProgressService } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { MenuEvaluacionesPage } from '../../../../menu-evaluaciones/menu-evaluaciones';
/**
 * Generated class for the Seccionescap3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seccionescap3',
  templateUrl: 'seccionescap3.html',
})
export class Seccionescap3Page {

  intro: string = "intro";
  isAndroid: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public srv: ProgressService) {
    this.isAndroid = platform.is('android');
  }

  aHome() {
    this.navCtrl.push(HomePage);
  }

  aManual() {
    this.navCtrl.push(ManualPage);
  }

  aChatInteractivo3() {
    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Siempre que ingrese al chat intractivo procure escribir su nombre en la parte superior seguido del mensaje que desea enviar en la parte inferior, luego presione enviar. Su nombre quedará guardado durante el tiempo que permanezca en el chat.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ChatCap3Page);
  }

  aDinamica1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(View1t1cap2din1Page);
  }

  aDinamica2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(View2t1cap2din2Page);
  }


  extencionTema1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap3intro1Page);
  }

  aNmap(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Met1NmapCap3Page);
  }

  aNetCat(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Met2NetCatCap3Page);
  }

  aEvaluacion(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(MenuEvaluacionesPage);
  }

  visitTopic(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
  }

  ionViewWillEnter() {
    this.subs = this.srv.progress()
      .subscribe(x => {
        this.total = x.total;
        this.ch1 = x.ch1;
        this.ch2 = x.ch2;
        this.ch3 = x.ch3;
        this.ch4 = x.ch4;
      });
  }



  ionViewWillLeave() {
    this.subs.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap3intro1Page');
  }


}
