import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController, App, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuEvaluacionesPage } from '../menu-evaluaciones/menu-evaluaciones';
import { SelecTematicaPage } from '../selec-tematica/selec-tematica';
import { VideosCursoPage } from '../videos-curso/videos-curso';
import { EjerciciosCursoPage } from '../ejercicios-curso/ejercicios-curso';
import { ManualPage } from '../manual/manual';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { AuthService } from '../../services/auth.service.';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { ChatInteractivoPage } from '../chat-interactivo/chat-interactivo';
import { ChapterProgress, ProgressService } from '../../services/progress.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  /** Arreglo contenido principal */

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public authService: AuthService, public alertController: AlertController, public app: App, public alertCtrl: AlertController, public srv: ProgressService) {
  }

  aSeleccionTematica() {
    this.navCtrl.push(SelecTematicaPage);
  }

  aEjerciciosCurso() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(EjerciciosCursoPage);
  }

  aVideosCurso() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(VideosCursoPage);
  }

  menuEvaluaciones() {
    this.navCtrl.push(MenuEvaluacionesPage);
  }

  aManual() {
    this.navCtrl.push(ManualPage);
  }

  aEstadisticas() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(EstadisticasPage);
  }

  aChatInteractivo() {
    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Siempre que ingrese al chat intractivo procure escribir su nombre en la parte superior seguido del mensaje que desea enviar en la parte inferior, luego presione enviar. Su nombre quedará guardado durante el tiempo que permanezca en el chat.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ChatInteractivoPage);
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => console.log(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Bienvenido a Piensa Seguro, ${data.email}',
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'email o contraseña erroneos',
          duration: 3000
        }).present()
      }
    })
    )
  }

  singOut() {

    const confirm = this.alertController.create({
      title: 'Confirmación',
      message: '¿Esta seguro que quiere cerrar la sesión?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.afAuth.auth.signOut();
            /** Este deja pasar entre paginas pero deja las taps al volver a la pagina login*/
            this.navCtrl.setRoot(PaginaPrincipalPage);

            /**Este quita las taps y regresa a la pagina inicio pero genera un error al ingresar de nuevo */
            /**this.app.getRootNav().setRoot(LoginPage);*/
            console.log('Aceptar activado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

            console.log('Cancelar activado');
          }
        }
      ]
    });
    confirm.present();
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

}


