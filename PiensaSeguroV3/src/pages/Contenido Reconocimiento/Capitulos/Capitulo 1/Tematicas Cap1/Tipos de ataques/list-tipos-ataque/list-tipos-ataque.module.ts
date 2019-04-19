import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTiposAtaquePage } from './list-tipos-ataque';

@NgModule({
  declarations: [
    ListTiposAtaquePage,
  ],
  imports: [
    IonicPageModule.forChild(ListTiposAtaquePage),
  ],
})
export class ListTiposAtaquePageModule {}
