import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecTematicaPage } from './selec-tematica';

@NgModule({
  declarations: [
    SelecTematicaPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecTematicaPage),
  ],
})
export class SelecTematicaPageModule {}
