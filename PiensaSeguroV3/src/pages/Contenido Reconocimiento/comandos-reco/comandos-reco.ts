import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { ChapterProgress, ProgressService } from '../../../services/progress.service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the ComandosRecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comandos-reco',
  templateUrl: 'comandos-reco.html',
})
export class ComandosRecoPage {

  intro: string = "Nmap";
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

  cargar(){
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 1000
    });
    loader.present();
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
    console.log('ionViewDidLoad ComandosRecoPage');
  }

}
