import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListPage } from '../Tematicas Cap1/Definiciones/list/list';
import { ListTiposAtaquePage } from '../Tematicas Cap1/Tipos de ataques/list-tipos-ataque/list-tipos-ataque';
import { T1cap1din1Page } from '../Tematicas Cap1/Dinamicas/t1cap1din1/t1cap1din1';
import { HomePage } from '../../../../home/home';
import { ManualPage } from '../../../../manual/manual';
import { ChatCap1Page } from '../chat-cap1/chat-cap1';
import { ChapterProgress, ProgressService } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the Seccionescap1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seccionescap1',
  templateUrl: 'seccionescap1.html',
})
export class Seccionescap1Page {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public srv: ProgressService) {
  }

  aHome() {
    this.navCtrl.push(HomePage);
  }

  aManual() {
    this.navCtrl.push(ManualPage);
  }

  aChatInteractivo1() {
    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Siempre que ingrese al chat intractivo procure escribir su nombre en la parte superior seguido del mensaje que desea enviar en la parte inferior, luego presione enviar. Su nombre quedará guardado durante el tiempo que permanezca en el chat.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ChatCap1Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seccionescap1Page');
  }

  aDefinicion(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(ListPage);
  }

  aTiposAtaque(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(ListTiposAtaquePage);
  }

  aDinamica(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap1din1Page);
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
