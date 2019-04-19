import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { T1cap4vul1Page } from '../Tematicas Cap4/t1cap4vul1/t1cap4vul1';
import { HomePage } from '../../../../home/home';
import { ManualPage } from '../../../../manual/manual';
import { ChatCap4Page } from '../chat-cap4/chat-cap4';
import { ChapterProgress, ProgressService } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { MenuEvaluacionesPage } from '../../../../menu-evaluaciones/menu-evaluaciones';

/**
 * Generated class for the Seccionescap4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seccionescap4',
  templateUrl: 'seccionescap4.html',
})
export class Seccionescap4Page {

  intro: string = "intro1";
  isAndroid: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public alertCtrl: AlertController, public srv: ProgressService) {
    this.isAndroid = platform.is('android');
  }

  aHome() {
    this.navCtrl.push(HomePage);
  }

  aManual() {
    this.navCtrl.push(ManualPage);
  }

  aChatInteractivo4() {
    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Siempre que ingrese al chat intractivo procure escribir su nombre en la parte superior seguido del mensaje que desea enviar en la parte inferior, luego presione enviar. Su nombre quedará guardado durante el tiempo que permanezca en el chat.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ChatCap4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seccionescap4Page');
  }

  pop1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap4vul1Page);
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
