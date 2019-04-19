import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TyCPage } from '../ty-c/ty-c';
import { ReferenciasPage } from '../referencias/referencias';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  aReferencias(){
    this.navCtrl.push(ReferenciasPage);
  }

  aTyC(){
    this.navCtrl.push(TyCPage);
  }
}
