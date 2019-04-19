import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Eva1T1Page } from '../Evaluaciones/eva1-t1/eva1-t1';
import { Eva2T2Page } from '../Evaluaciones/eva2-t2/eva2-t2';
import { Eva3T3Page } from '../Evaluaciones/eva3-t3/eva3-t3';
import { Eva4T4Page } from '../Evaluaciones/eva4-t4/eva4-t4';
import { ChapterProgress, ProgressService } from '../../services/progress.service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the MenuEvaluacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-evaluaciones',
  templateUrl: 'menu-evaluaciones.html',
})
export class MenuEvaluacionesPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public srv: ProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuEvaluacionesPage');
  }
  
  Eva1T1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(Eva1T1Page);
  }

  Eva2T2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(Eva2T2Page);
  }

  Eva3T3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(Eva3T3Page);
  }

  Eva4T4(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(Eva4T4Page);
  }

  ionViewWillEnter() {
    this.subs = this.srv.progress()
      .subscribe(x => {
        this.total = x.total;
        this.ch1 = x.ch1;
        this.ch2 = x.ch2;
        this.ch3 = x.ch3;
        this.ch4 = x.ch4;
        this.ch5 = x.ch5;
      });
  }



  ionViewWillLeave() {
    this.subs.unsubscribe();
  }
}
