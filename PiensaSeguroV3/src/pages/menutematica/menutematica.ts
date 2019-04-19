import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


/**
 * Generated class for the MenutematicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menutematica',
  templateUrl: 'menutematica.html',
})
export class MenutematicaPage {


  /** Arreglo contenido principal */
  Nmap = [];
  NetCat = [];
  MetaExpl =[];
  seccion = [];

  constructor(public navCtrl: NavController) {

    this.seccion = [
      {
        seccion: "NMAP"
      },

      {
        seccion: "NETCAT"
      },

      {
        seccion: "METAEXPLOTABLE"
      }

    ],

    this.Nmap = [

      /*** Uso NMAP */
      {
        seccion: "NMAP",
        titulo: "Intro",
        imagen: "../assets/icon/Introduccion.png",
     
      },

      {
        titulo: "Aprende",
        imagen: "../assets/icon/Aprender.png",
        
      },

      {
        titulo: "Comandos",
        imagen: "../assets/icon/Comando.png",
       
      },

      {
        titulo: "Reto",
        imagen: "../assets/icon/Reto.png",
        
      }
    ],

    this.NetCat = [

      /*** Uso NETCAT */
      {
        seccion: "NETCAT",
        titulo: "Intro",
        imagen: "../assets/icon/Introduccion2.png",
       
      },

      {
        titulo: "Aprende",
        imagen: "../assets/icon/Aprender2.png",
       
      },

      {
        titulo: "Comandos",
        imagen: "../assets/icon/Comando2.png",
        
      },

      {
        titulo: "Reto",
        imagen: "../assets/icon/Reto2.png",
        espacio: " "
        
      }
    ],
     
    this.MetaExpl = [

      /*** Uso MetaExpl */
      {
        seccion: "MetaExpl",
        titulo: "Intro",
        imagen: "../assets/icon/Introduccion2.png",
       
      },

      {
        titulo: "Aprende",
        imagen: "../assets/icon/Aprender2.png",
       
      },

      {
        titulo: "Comandos",
        imagen: "../assets/icon/Comando2.png",
        
      },

      {
        titulo: "Reto",
        imagen: "../assets/icon/Reto2.png",
        espacio: " "
        
      }
    ]

    
  }


}
