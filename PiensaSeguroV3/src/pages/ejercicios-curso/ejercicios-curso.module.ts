import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjerciciosCursoPage } from './ejercicios-curso';

@NgModule({
  declarations: [
    EjerciciosCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(EjerciciosCursoPage),
  ],
})
export class EjerciciosCursoPageModule {}
