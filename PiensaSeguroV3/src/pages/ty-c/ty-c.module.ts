import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TyCPage } from './ty-c';

@NgModule({
  declarations: [
    TyCPage,
  ],
  imports: [
    IonicPageModule.forChild(TyCPage),
  ],
})
export class TyCPageModule {}
