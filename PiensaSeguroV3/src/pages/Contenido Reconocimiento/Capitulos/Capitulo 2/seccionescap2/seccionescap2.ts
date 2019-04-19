import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';


import { T1cap2intro1Page } from '../Tematicas Cap2/Intro Cap2/t1cap2intro1/t1cap2intro1';
import { T1cap2LocaObje1Page } from '../Tematicas Cap2/t1cap2-loca-obje1/t1cap2-loca-obje1';
import { T1cap2LocaObje2Page } from '../Tematicas Cap2/t1cap2-loca-obje2/t1cap2-loca-obje2';
import { View1t1cap2din1Page } from '../Tematicas Cap2/Dinamicas/Actividades/view1t1cap2din1/view1t1cap2din1';
import { View2t1cap2din2Page } from '../Tematicas Cap2/Dinamicas/Actividades/view2t1cap2din2/view2t1cap2din2';
import { View3t1cap2din3Page } from '../Tematicas Cap2/Dinamicas/Actividades/view3t1cap2din3/view3t1cap2din3';
import { View4t1cap2din4Page } from '../Tematicas Cap2/Dinamicas/Actividades/view4t1cap2din4/view4t1cap2din4';
import { HomePage } from '../../../../home/home';
import { ManualPage } from '../../../../manual/manual';
import { ChatCap2Page } from '../chat-cap2/chat-cap2';
import { ChapterProgress, ProgressService } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { MenuEvaluacionesPage } from '../../../../menu-evaluaciones/menu-evaluaciones';

/**
 * Generated class for the Seccionescap2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seccionescap2',
  templateUrl: 'seccionescap2.html',
})
export class Seccionescap2Page {

  intro: string = "vector";
  isAndroid: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public srv: ProgressService) {
    this.isAndroid = platform.is('android');
  }

  aHome() {
    this.navCtrl.push(HomePage);
  }

  aManual() {
    this.navCtrl.push(ManualPage);
  }

  aChatInteractivo2() {
    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Siempre que ingrese al chat intractivo procure escribir su nombre en la parte superior seguido del mensaje que desea enviar en la parte inferior, luego presione enviar. Su nombre quedará guardado durante el tiempo que permanezca en el chat.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ChatCap2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seccionescap1Page');
  }

  extencionTema1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap2intro1Page);
  }

  extencionTema2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap2LocaObje1Page);
  }

  extencionTema3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap2LocaObje2Page);
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

  aDinamica3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(View3t1cap2din3Page);
  }

  aDinamica4(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(View4t1cap2din4Page);
  }

  pop1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const alert = this.alertCtrl.create({
      title: 'Identificar servicios',
      subTitle: 'Se emplea principalmente para conocer los servicios que se estan ejectutando en el sistema y se realiza emplenado el comando: *rpm –i nmap-3.81-1.i386.rpm* , *nmap –sP DIR RED* , *nmap ip*.',
      buttons: ['OK']
    });
    alert.present();
  }

  pop2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const alert = this.alertCtrl.create({
      title: 'Identificar Sistema Operativo',
      subTitle: 'Se emplea principalmente para conocer el tipo de sistema operativo instalado en el sistema y se realiza empleando el siguiente comando: *nmap –O ip*.',
      buttons: ['OK']
    });
    alert.present();
  }

  aEvaluacion(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
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

}
