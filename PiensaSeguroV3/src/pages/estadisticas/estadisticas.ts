import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { T1cap1Page } from '../Contenido Reconocimiento/Capitulos/Capitulo 1/t1cap1/t1cap1';
import { T1cap2Page } from '../Contenido Reconocimiento/Capitulos/Capitulo 2/t1cap2/t1cap2';
import { T1cap3Page } from '../Contenido Reconocimiento/Capitulos/Capitulo 3/t1cap3/t1cap3';
import { T1cap4Page } from '../Contenido Reconocimiento/Capitulos/Capitulo 4/t1cap4/t1cap4';
import { ManualPage } from '../manual/manual';
import { HomePage } from '../home/home';
import { ChapterProgress, ProgressService } from '../../services/progress.service';
import { Subscription } from 'rxjs';
import { MenuEvaluacionesPage } from '../menu-evaluaciones/menu-evaluaciones';
/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public srv: ProgressService) {
  }

  T1cap1() {
    this.navCtrl.push(T1cap1Page);
  }

  T1cap2() {
    this.navCtrl.push(T1cap2Page);
  }

  T1cap3() {
    this.navCtrl.push(T1cap3Page);
  }

  T1cap4() {
    this.navCtrl.push(T1cap4Page);
  }

  aMenu(){
    this.navCtrl.push(HomePage);
  }

  aManual(){
    this.navCtrl.push(ManualPage)
  }

  aEvaluaciones(){
    this.navCtrl.push(MenuEvaluacionesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticasPage');
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
        this.ch5 = x.ch5;
      });
  }



  ionViewWillLeave() {
    this.subs.unsubscribe();
  }

}
