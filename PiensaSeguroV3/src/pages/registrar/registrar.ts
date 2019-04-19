import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  user = {} as User;


  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  Register(user: User) {

    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword (user.email, user.password);
      this.navCtrl.push(LoginPage);
      alert('Usuario registrado');
      console.log(result);


      //
    }
catch(e){
  alert(e);
}
    
  }

}
