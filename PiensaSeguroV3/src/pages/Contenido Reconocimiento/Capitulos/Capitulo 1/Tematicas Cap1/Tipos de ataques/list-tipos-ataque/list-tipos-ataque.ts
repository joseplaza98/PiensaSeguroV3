import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { ViewTiposAtaquePage } from '../view-tipos-ataque/view-tipos-ataque';
import { D2P1T1Page } from '../../Dinamicas/d2-p1-t1/d2-p1-t1';
import { D3P1T1Page } from '../../Dinamicas/d3-p1-t1/d3-p1-t1';
import { ChapterProgress, ProgressService } from '../../../../../../../services/progress.service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the ListTiposAtaquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-tipos-ataque',
  templateUrl: 'list-tipos-ataque.html',
})
export class ListTiposAtaquePage {

  Spoofing = [];
  Ataques2 = [];

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
        'Header': 'Tipo Activo',
        'title': '• Por interrupción',
        'description1': '• Impide o inhibe el uso normal o la gestión de recursos informáticos y de comunicaciones.',
        'description2': '• Por ejemplo, el intruso podría suprimir todos los mensajes dirigidos a una determinada entidad o se podría interrumpir el servicio de una red inundándola con mensajes espurios.',
        'description3': '• Entre estos ataques se encuentran los de denegación de servicio, consistentes en paralizar temporalmente el servicio de un servidor de correo, Web, FTP, etc.',
        'color': '#E63135',
        /** Foto de construcción creado por kjpargeter - www.freepik.es */
        'imagen': '../../../../assets/imgs/1Interrupcion.jpg'

      },
      {
        'Header': 'Tipo Activo',
        'title': '• Por modificación',
        'description1': '• Una porción del mensaje legítimo es alterada, o los mensajes son retardados o reordenados, para producir un efecto no autorizado.',
        'descrition2': '• Por ejemplo, el mensaje “Ingresa un millón de pesetas en la cuenta A” podría ser modificado para decir “Ingresa un millón de pesetas en la cuenta B”.',
        'color': '#0CA9EA',
        /** Foto de manos creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/2Modificacion.jpg'

      },
      {
        'Header': 'Tipo Activo',
        'title': '• Por fabricación',
        'description1': '• El intruso se hace pasar por una entidad diferente. Normalmente incluye alguna de las otras formas de ataque activo.',
        'description2': '• Por ejemplo, secuencias de autenticación pueden ser capturadas y repetidas, permitiendo a una entidad no autorizada acceder a una serie de recursos privilegiados suplantando a la entidad que posee esos privilegios, como al robar la contraseña de acceso a una cuenta.',
        'color': '#F46529',
        /** Foto de negocios creado por bedneyimages - www.freepik.es */
        'imagen': '../../../../assets/imgs/3Fabricacion.jpg'
      },
      {
        'Header': 'Tipo Pasivo',
        'title': '• Por intercepción',
        'description1': '• En los ataques pasivos el atacante no altera la comunicación, sino que únicamente la escucha o monitoriza, para obtener información que está siendo transmitida. Sus objetivos son la intercepción de datos y el análisis de tráfico, una técnica más sutil para obtener información de la comunicación, que puede consistir en:',
        'description2': '• Obtención del origen y destinatario de la comunicación, leyendo las cabeceras de los paquetes monitorizados.',
        'description3': '• Control del volumen de tráfico intercambiado entre las entidades monitorizadas, obteniendo así información acerca de actividad o inactividad inusuales.',
        'description4': '• Control de las horas habituales de intercambio de datos entre las entidades de la comunicación, para extraer información acerca de los períodos de actividad.',
        'color': '#FFD439',
        /** Foto de negocios creado por snowing - www.freepik.es */
        'imagen': '../../../../assets/imgs/4Intercepcion.jpg'
      },
    ]

    this.Spoofing = [
      {
        'Header': 'Spoofing-Suplantacion',
        'title': '• Suplantación de IP',
        'description': '• Consiste básicamente en sustituir la dirección IP origen de un paquete TCP/IP por otra dirección IP a la cual se desea suplantar. Esto se consigue generalmente gracias a programas destinados a ello y puede ser usado para cualquier protocolo dentro de TCP/IP como ICMP, UDP o TCP.',
        'color': '#F46529',
        /** Foto de fondo creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/1Suplantacion.jpg'
      },
      {
        'Header': 'Spoofing-Suplantacion',
        'title': '• Suplantación de ARP',
        'description': '• La suplantación de identidad por falsificación de tabla ARP se trata de la construcción de tramas de solicitud y respuesta ARP modificadas con el objetivo de falsear la tabla ARP (relación IP-MAC) de una víctima y forzarla a que envíe los paquetes a un host atacante en lugar de hacerlo a su destino legítimo.',
        'color': '#F46529',
        /** Foto de fondo creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/2SuplantacionARP.jpg'
      },
      {
        'Header': 'Spoofing-Suplantacion',
        'title': '• Suplantación de DNS',
        'description1': '• Suplantación de identidad por nombre de dominio. Se trata del falseamiento de una relación entre nombre de dominio y una IP ante una consulta de resolución de nombre, es decir, resolver con una dirección IP falsa un cierto nombre DNS o viceversa.',
        'description2': '• Esto se consigue falseando las entradas de la relación nombre de dominio e IP de un servidor DNS, mediante alguna vulnerabilidad del servidor en concreto o por su confianza hacia servidores poco fiables (DNS Rogue).',
        'color': '#F46529',
        /** Foto de fondo creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/3SuplantacionDNS.jpg'
      },
      {
        'Header': 'Spoofing-Suplantacion',
        'title': '• Suplantación de web',
        'description1': '• Suplantación de una página web real (no confundir con phishing). Enruta la conexión de una víctima a través de una página falsa hacia otras páginas web con el objetivo de obtener información de dicha víctima (páginas web vistas, información de formularios, contraseñas etc.).',
        'description2': '• La página web falsa actúa a modo de proxy, solicitando la información requerida por la víctima a cada servidor original y saltándose incluso la protección SSL.',
        'description3': '• El atacante puede modificar cualquier información desde y hacia cualquier servidor que la víctima visite.',
        'color': '#F46529',
        /** Foto de tecnología creado por rawpixel.com - www.freepik.es */
        'imagen': '../../../../assets/imgs/4SuplantacionWEB.jpg'
      },
      {
        'Header': 'Spoofing-Suplantacion',
        'title': '• Suplantación de Correo',
        'description1': '• Suplantación de la dirección de correo electrónico de otras personas o entidades.',
        'description2': '• Esta técnica es usada con asiduidad para el envío de mensajes de correo electrónico hoax como suplemento perfecto para el uso de suplantación de identidad y para SPAM, es tan sencilla como el uso de un servidor SMTP configurado para tal fin.',
        'color': '#F46529',
        /** Foto de negocios creado por jannoon028 - www.freepik.es */
        'imagen': '../../../../assets/imgs/5SuplantacionCorreo.jpg'
      },

    ]

    this.Ataques2 = [
      {
        'Header': 'Phising',
        'title': '• Phising-Pesca',
        'description': '• Es una variable de la ingeniería social. A través de mensajes de texto “falsificados” y sitios Web fraudulentos engañan a los usuarios con el fin de que revelen datos financieros, datos personales, contraseñas, etc.',
        'color': '#F46529',
        'imagen': '../../../../assets/imgs/analista_aplicacionesII1.png'
      },
      {
        'Header': 'Ataques dirigidos',
        'title': '• Virus',
        'description': '• Programa de computadora confeccionado en el anonimato que tiene la capacidad de reproducirse y transmitirse independientemente de la voluntad del operador y que causa alteraciones más o menos graves en el funcionamiento de la computadora.',
        'color': '#F46529',
        'imagen': '../../../../assets/imgs/analista_aplicacionesII1.png'
      },
      {
        'Header': 'Ataques dirigidos',
        'title': '• Gusanos',
        'description': '• Es un malware que tiene la propiedad de duplicarse a sí mismo. Los gusanos utilizan las partes automáticas de un sistema operativo que generalmente son invisibles al usuario.',
        'color': '#F46529',
        'imagen': '../../../../assets/imgs/analista_aplicacionesII1.png'
      },
      {
        'Header': 'Ataques dirigidos',
        'title': '• JavaScript',
        'description': '• Las JavaScript Botnets, son empleadas para la realizacion de ataques dirigidos a webs cuando aún está conectada la víctima al payload, para que una vez que se desconecte, la web que visite esté infectada.',
        'color': '#F46529',
        'imagen': '../../../../assets/imgs/analista_aplicacionesII1.png'
      },
      {
        'Header': 'Ataques dirigidos',
        'title': '• Troyanos',
        'description': '• se denomina caballo de Troya, o troyano, a un malware que se presenta al usuario como un programa aparentemente legítimo e inofensivo, pero que, al ejecutarlo, le brinda a un atacante acceso remoto al equipo infectado.​​',
        'color': '#F46529',
        'imagen': '../../../../assets/imgs/analista_aplicacionesII1.png'
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
    this.navCtrl.push(D2P1T1Page);
  }

  actividad2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 5000
    });
    loader.present();
    this.navCtrl.push(D3P1T1Page)
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
    this.navCtrl.push(ViewTiposAtaquePage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTiposAtaquePage');
  }

}

