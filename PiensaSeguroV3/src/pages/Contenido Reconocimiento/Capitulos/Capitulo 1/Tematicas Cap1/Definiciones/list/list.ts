import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { D1P1T1Page } from '../../Dinamicas/d1-p1-t1/d1-p1-t1';
import { ChapterProgress, ProgressService } from '../../../../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  miLista = [];

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public srv: ProgressService) {

    this.miLista = [
      {
        'title': '• Hacker',
        'description': '• Un hacker puede ser aquel que se divierte empleando al máximo su inteligencia, sin la necesidad de ocasionar daños a un tercero.',
        'color': '#E63135',
        /** Foto de ordenador creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/1Hacker.jpg'

      },
      {
        'title': '• Analista informático',
        'description': '• Disciplina que se refiere al análisis de las condiciones de una instalación informática por un auditor externo e independiente que realiza un dictamen sobre diferentes aspectos.',
        'color': '#0CA9EA',
        /** Foto de negocios creado por snowing - www.freepik.es */
        'imagen': '../../../../assets/imgs/2AnalistaInformatico.jpg'

      },
      {
        'title': '• Cracker',
        'description': '• El término cracker o cráquer se utiliza para referirse a las personas que rompen o vulneran algún sistema de seguridad.​ Los crackers pueden estar motivados por una multitud de razones, incluyendo fines de lucro, protesta, o por el desafío.',
        'color': '#F46529',
        /** Vector de tecnología creado por macrovector - www.freepik.es */
        'imagen': '../../../../assets/imgs/3Cracker.jpg'
      },
      {
        'title': '• Ética de un Hacker I',
        'description1': '• El acceso a los ordenadores, y a cualquier cosa que pudiera enseñarte algo sobre cómo funciona el mundo debería ser ilimitado y total •Básate siempre en el imperativo de la práctica.',
        'description2': '• Toda información debería ser libre.',
        'description3': '• Desconfía de la autoridad, promueve la descentralización.',
        'description4': '• Los hackers deberían ser juzgados únicamente por su habilidad en el hackeo, no por criterios sin sentido como los títulos, edad, raza o posición social.',
        'description5': '• Se puede crear arte en un ordenador.',
        'description6': '• Los ordenadores pueden cambiar tu vida a mejor.',
        'color': '#FFD439',
        /** Foto de manos creado por freepik - www.freepik.es */
        'imagen': '../../../../assets/imgs/4EticalHacking.jpg'
      },
      {
        'title': '• Ética de un hacker II',
        'description1': '• La creencia en que compartir información es un bien poderoso y positivo, y que es tarea ética de los hackers compartir sus experiencias escribiendo código abierto («open source») y facilitando el acceso a la información y los recursos de computación siempre que sea posible.',
        'description2': '• La creencia de que romper sistemas por diversión y exploración está éticamente bien siempre que el cracker no cometa un robo, un acto de vandalismo o vulnere la confidencialidad.',
        'color': '#CE6296',
        /** Foto de manos creado por freepik - www.freepik.es */
        'imagen': '../../../../assets/imgs/4EticalHacking.jpg'
      },
      {
        'title': '• Phreakers',
        'description': '• Un phreaker es una persona que investiga los sistemas telefónicos, mediante el uso de tecnología por el placer de manipular un sistema tecnológicamente complejo y en ocasiones también para poder obtener algún tipo de beneficio como llamadas gratuitas.',
        'color': '#78BD43',
        /** Foto de negocios creado por katemangostar - www.freepik.es */
        'imagen': '../../../../assets/imgs/5Phereakers.jpg'
      },
    ]

  }

  actividad1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(D1P1T1Page);
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


  openNavDetailsPage(item) {
    this.navCtrl.push(ViewPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
