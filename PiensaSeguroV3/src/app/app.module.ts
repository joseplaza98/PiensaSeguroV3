import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ManualPage } from '../pages/manual/manual';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { ChatInteractivoPage } from '../pages/chat-interactivo/chat-interactivo';
import { AboutPage } from '../pages/about/about';
import { ReferenciasPage } from '../pages/referencias/referencias';
import { TyCPage } from '../pages/ty-c/ty-c';
import { ContactPage } from '../pages/contact/contact';

import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';

import { MenutematicaPage } from '../pages/menutematica/menutematica';
import { EjerciciosCursoPage } from '../pages/ejercicios-curso/ejercicios-curso';
import { VideosCursoPage } from '../pages/videos-curso/videos-curso';
/**Paginas Seleccion de tematica */
import { SelecTematicaPage } from '../pages/selec-tematica/selec-tematica';
import { IntroRecoPage } from '../pages/Contenido Reconocimiento/intro-reco/intro-reco';
import { IntroRecoVideoPage } from '../pages/Contenido Reconocimiento/intro-reco-video/intro-reco-video';

import { AprendeRecoPage } from '../pages/Contenido Reconocimiento/aprende-reco/aprende-reco';
import { ComandosRecoPage } from '../pages/Contenido Reconocimiento/comandos-reco/comandos-reco';
import { RetosRecoPage } from '../pages/Contenido Reconocimiento/retos-reco/retos-reco';

/**Selecion de evaluación */
import { MenuEvaluacionesPage } from '../pages/menu-evaluaciones/menu-evaluaciones';
import { Eva1T1Page } from '../pages/Evaluaciones/eva1-t1/eva1-t1';
import { Eva2T2Page } from '../pages/Evaluaciones/eva2-t2/eva2-t2';
import { Eva3T3Page } from '../pages/Evaluaciones/eva3-t3/eva3-t3';
import { Eva4T4Page } from '../pages/Evaluaciones/eva4-t4/eva4-t4';

/**Tematica 1 Capitulos */

import { T1cap1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/t1cap1/t1cap1';
import { Seccionescap1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/seccionescap1/seccionescap1';

/**Definiciones Capitulo 1 */
import { ListPage } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Definiciones/list/list';
import { ViewPage } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Definiciones/view/view';

/** Chat interactivo cap 1*/
import { ChatCap1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/chat-cap1/chat-cap1';

/**Dinamica capitulo 1*/
import { D1P1T1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/d1-p1-t1/d1-p1-t1';
import { D2P1T1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/d2-p1-t1/d2-p1-t1';
import { D3P1T1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/d3-p1-t1/d3-p1-t1';
import { T1cap1din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/t1cap1din1/t1cap1din1';
import { View1t1cap1din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/Actividades/view1t1cap1din1/view1t1cap1din1';
import { View2t1cap1din2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/Actividades/view2t1cap1din2/view2t1cap1din2';
import { View3t1cap1din3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/Actividades/view3t1cap1din3/view3t1cap1din3';
import { View4t1cap1din4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Dinamicas/Actividades/view4t1cap1din4/view4t1cap1din4';


/**Tipos de ataques */

import { ListTiposAtaquePage } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Tipos de ataques/list-tipos-ataque/list-tipos-ataque';
import { ViewTiposAtaquePage } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 1/Tematicas Cap1/Tipos de ataques/view-tipos-ataque/view-tipos-ataque';
import { T1cap2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/t1cap2/t1cap2';
import { Seccionescap2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/seccionescap2/seccionescap2';

/** Chat interactivo cap 2*/
import { ChatCap2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/chat-cap2/chat-cap2';

/**Definiciones Capitulo 2 */
import { T1cap2intro1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/Intro Cap2/t1cap2intro1/t1cap2intro1';
import { View1t1cap2din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view1t1cap2din1/view1t1cap2din1';
import { View2t1cap2din2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view2t1cap2din2/view2t1cap2din2';
import { View3t1cap2din3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view3t1cap2din3/view3t1cap2din3';
import { View4t1cap2din4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/Dinamicas/Actividades/view4t1cap2din4/view4t1cap2din4';
import { T1cap2LocaObje1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/t1cap2-loca-obje1/t1cap2-loca-obje1';
import { T1cap2LocaObje2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 2/Tematicas Cap2/t1cap2-loca-obje2/t1cap2-loca-obje2';

/**Definiciones Capitulo 3 */
import { T1cap3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/t1cap3/t1cap3';
import { Seccionescap3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/seccionescap3/seccionescap3';

/** Chat interactivo cap 3*/
import { ChatCap3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/chat-cap3/chat-cap3';

import { T1cap3intro1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/Tematicas Cap 3/Intro Cap 3/t1cap3intro1/t1cap3intro1';
import { Met1NmapCap3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/Tematicas Cap 3/met1-nmap-cap3/met1-nmap-cap3';
import { Met2NetCatCap3Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/Tematicas Cap 3/met2-net-cat-cap3/met2-net-cat-cap3';
import { View1t1cap3din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/Tematicas Cap 3/Dinamicas/Actividades/view1t1cap3din1/view1t1cap3din1';
import { View2t1cap3din2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 3/Tematicas Cap 3/Dinamicas/Actividades/view2t1cap3din2/view2t1cap3din2';

/**Definiciones Capitulo 4 */
import { T1cap4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/t1cap4/t1cap4';
import { Seccionescap4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/seccionescap4/seccionescap4';

/** Chat interactivo cap 4*/
import { ChatCap4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/chat-cap4/chat-cap4';

import { T1cap4intro1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/Intro Cap4/t1cap4intro1/t1cap4intro1';
import { T1cap4din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/Dinamicas/t1cap4din1/t1cap4din1';
import { Viewdin2cap4Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/Dinamicas/Actividades/viewdin2cap4/viewdin2cap4';
import { View1t1cap4din1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/Dinamicas/Actividades/view1t1cap4din1/view1t1cap4din1';
import { View2t1cap4din2Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/Dinamicas/Actividades/view2t1cap4din2/view2t1cap4din2';
import { T1cap4vul1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/t1cap4vul1/t1cap4vul1';
import { T1cap4vali1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/t1cap4vali1/t1cap4vali1';
import { T1cap4ata1rfi1Page } from '../pages/Contenido Reconocimiento/Capitulos/Capitulo 4/Tematicas Cap4/t1cap4ata1rfi1/t1cap4ata1rfi1';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service.';

import { DataProvider } from '../providers/data';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { HttpModule } from '@angular/http';
import { ProgressService } from '../services/progress.service';



export const firebaseConfig = {
  apiKey: "AIzaSyCwVgzGQSNBXix6qTgaX4HptCyZ3fs47HI",
  authDomain: "loginpiensaseguro.firebaseapp.com",
  databaseURL: "https://loginpiensaseguro.firebaseio.com",
  projectId: "loginpiensaseguro",
  storageBucket: "loginpiensaseguro.appspot.com",
  messagingSenderId: "570428737474"
};

@NgModule({
  declarations: [
    MyApp,
    ManualPage,
    EstadisticasPage,
    ChatInteractivoPage,
    AboutPage,
    ReferenciasPage,
    TyCPage,
    ContactPage,
    PaginaPrincipalPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    MenutematicaPage,
    SelecTematicaPage,
    MenuEvaluacionesPage,
    VideosCursoPage,
    EjerciciosCursoPage,
    Eva1T1Page,
    Eva2T2Page,
    Eva3T3Page,
    Eva4T4Page,
    IntroRecoPage,
    IntroRecoVideoPage,
    AprendeRecoPage,
    ComandosRecoPage,
    RetosRecoPage,

    ListPage,
    ViewPage,
    ListTiposAtaquePage,
    ViewTiposAtaquePage,

    T1cap1Page,
    Seccionescap1Page,
    ChatCap1Page,
    D1P1T1Page,
    D2P1T1Page,
    D3P1T1Page,
    T1cap1din1Page,
    View1t1cap1din1Page,
    View2t1cap1din2Page,
    View3t1cap1din3Page,
    View4t1cap1din4Page,

    T1cap2Page,
    Seccionescap2Page,
    ChatCap2Page,
    T1cap2intro1Page,

    View1t1cap2din1Page,
    View2t1cap2din2Page,
    View3t1cap2din3Page,
    View4t1cap2din4Page,
    T1cap2LocaObje1Page,
    T1cap2LocaObje2Page,

    T1cap3Page,
    Seccionescap3Page,
    ChatCap3Page,
    T1cap3intro1Page,
    Met1NmapCap3Page,
    Met2NetCatCap3Page,

    T1cap4Page,
    Seccionescap4Page,
    ChatCap4Page,
    T1cap4intro1Page,
    T1cap4din1Page,
    View1t1cap4din1Page,
    Viewdin2cap4Page,
    View2t1cap4din2Page,
    View1t1cap3din1Page,
    View2t1cap3din2Page,
    T1cap4vul1Page,
    T1cap4vali1Page,
    T1cap4ata1rfi1Page,


    FlashCardComponent,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ManualPage,
    EstadisticasPage,
    ChatInteractivoPage,
    AboutPage,
    ReferenciasPage,
    TyCPage,
    ContactPage,
    PaginaPrincipalPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    MenutematicaPage,
    SelecTematicaPage,
    MenuEvaluacionesPage,
    EjerciciosCursoPage,
    VideosCursoPage,
    Eva1T1Page,
    Eva2T2Page,
    Eva3T3Page,
    Eva4T4Page,
    IntroRecoPage,
    IntroRecoVideoPage,
    AprendeRecoPage,
    ComandosRecoPage,
    RetosRecoPage,


    ListPage,
    ViewPage,
    ListTiposAtaquePage,
    ViewTiposAtaquePage,

    T1cap1Page,
    Seccionescap1Page,
    ChatCap1Page,
    T1cap1din1Page,
    D1P1T1Page,
    D2P1T1Page,
    D3P1T1Page,
    View1t1cap1din1Page,
    View2t1cap1din2Page,
    View3t1cap1din3Page,
    View4t1cap1din4Page,

    T1cap2Page,
    Seccionescap2Page,
    ChatCap2Page,
    T1cap2intro1Page,

    View1t1cap2din1Page,
    View2t1cap2din2Page,
    View3t1cap2din3Page,
    View4t1cap2din4Page,
    T1cap2LocaObje1Page,
    T1cap2LocaObje2Page,

    T1cap3Page,
    Seccionescap3Page,
    ChatCap3Page,
    T1cap3intro1Page,
    Met1NmapCap3Page,
    Met2NetCatCap3Page,

    T1cap4Page,
    Seccionescap4Page,
    ChatCap4Page,
    T1cap4intro1Page,
    T1cap4din1Page,
    View1t1cap4din1Page,
    Viewdin2cap4Page,
    View2t1cap4din2Page,
    View1t1cap3din1Page,
    View2t1cap3din2Page,
    T1cap4vul1Page,
    T1cap4vali1Page,
    T1cap4ata1rfi1Page,



  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    DataProvider,
    ProgressService,


  ]
})
export class AppModule { }