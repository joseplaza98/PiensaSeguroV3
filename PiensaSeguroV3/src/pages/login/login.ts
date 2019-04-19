import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service.';
import { HomePage } from '../home/home';
import { RegistrarPage } from '../registrar/registrar';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LoginFacebook() {
    this.authService.LoginConFacebook().then((response) => {
      alert('Logeado con exito');
      this.viewCtrl.dismiss();
      localStorage.setItem('LoginData', JSON.stringify(response));
    });
  }

  LoginGoogle() {
    this.authService.LoginConGoogle().then((response) => {
      alert('Logeado con exito');
      this.navCtrl.push(HomePage);
      this.viewCtrl.dismiss();
      localStorage.setItem('LoginData', JSON.stringify(response));
    });
  }


  async Login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    
    .then((returnedUser) => {
        this.navCtrl.setRoot(HomePage);
        const alert = this.alertCtrl.create({
          title: 'Bienvenido',
          subTitle: 'Piensa Seguro le da la bienvenida al curso básico de Seguridad Informática en las redes.',
          buttons: ['OK']
        });
        alert.present();

      })
      .catch((err) => {

        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Email o contraseña incorrectos por favor intentelo de nuevo.',
          buttons: ['OK']
        });
        alert.present();

 
        console.log('Error', err);
        
      })
    
  }


  Register() {
    this.navCtrl.push(RegistrarPage);

  }


  Cancelar() {
    this.viewCtrl.dismiss();
  }
}