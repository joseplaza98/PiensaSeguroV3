import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatInteractivoPage } from './chat-interactivo';

@NgModule({
  declarations: [
    ChatInteractivoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatInteractivoPage),
  ],
})
export class ChatInteractivoPageModule {}
