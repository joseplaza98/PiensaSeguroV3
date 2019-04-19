import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { T1cap4ata1rfi1Page } from '../t1cap4ata1rfi1/t1cap4ata1rfi1';
import { ChapterProgress, ProgressService } from '../../../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { Viewdin2cap4Page } from '../Dinamicas/Actividades/viewdin2cap4/viewdin2cap4';
import { MenuEvaluacionesPage } from '../../../../../menu-evaluaciones/menu-evaluaciones';

/**
 * Generated class for the T1cap4vali1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap4vali1',
  templateUrl: 't1cap4vali1.html',
})
export class T1cap4vali1Page {

  intro: string = "t1-t2";
  isAndroid: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController, public srv: ProgressService) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1cap4vali1Page');
  }

  pop1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(T1cap4ata1rfi1Page);
  }

  aDinamica1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic); 
    const loader = this.loadingCtrl.create({
    content: "Espere un momento...",
    duration: 5000
  });
  loader.present();
    this.navCtrl.push(Viewdin2cap4Page)
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
