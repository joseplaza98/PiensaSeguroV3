import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EstadisticasPage } from '../estadisticas/estadisticas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = EstadisticasPage;

  constructor(public modalCtrl: ModalController ) {

    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
