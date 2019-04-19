import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { View1t1cap1din1Page } from '../Actividades/view1t1cap1din1/view1t1cap1din1';
import { View2t1cap1din2Page } from '../Actividades/view2t1cap1din2/view2t1cap1din2';
import { View3t1cap1din3Page } from '../Actividades/view3t1cap1din3/view3t1cap1din3';
import { View4t1cap1din4Page } from '../Actividades/view4t1cap1din4/view4t1cap1din4';
import { ChapterProgress, ProgressService } from '../../../../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { MenuEvaluacionesPage } from '../../../../../../menu-evaluaciones/menu-evaluaciones';

/**
 * Generated class for the T1cap1din1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1cap1din1',
  templateUrl: 't1cap1din1.html',
})
export class T1cap1din1Page {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public srv: ProgressService) {
  }

  aDinamica1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(View1t1cap1din1Page);
  }

  aDinamica2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(View2t1cap1din2Page);
  }

  aDinamica3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(View3t1cap1din3Page);
  }

  aDinamica4(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(View4t1cap1din4Page);
  }

  aEvaluacion(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(MenuEvaluacionesPage);
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
    console.log('ionViewDidLoad T1cap1din1Page');
  }


}
