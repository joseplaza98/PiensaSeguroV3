import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosCursoPage } from './videos-curso';

@NgModule({
  declarations: [
    VideosCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideosCursoPage),
  ],
})
export class VideosCursoPageModule {}
