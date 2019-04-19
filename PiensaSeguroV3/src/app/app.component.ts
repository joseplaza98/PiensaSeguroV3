import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCwVgzGQSNBXix6qTgaX4HptCyZ3fs47HI",
  authDomain: "loginpiensaseguro.firebaseapp.com",
  databaseURL: "https://loginpiensaseguro.firebaseio.com",
  projectId: "loginpiensaseguro",
  storageBucket: "loginpiensaseguro.appspot.com",
  messagingSenderId: "570428737474"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PaginaPrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

}
