import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';

/**
 * Generated class for the PaginaPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLogin(){
    this.navCtrl.push(LoginPage);
  }

  aAbout(){
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaPrincipalPage');
  }

}
