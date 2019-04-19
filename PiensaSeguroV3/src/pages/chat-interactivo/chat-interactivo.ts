import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ChatInteractivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-interactivo',
  templateUrl: 'chat-interactivo.html',
})
export class ChatInteractivoPage {

  @ViewChild("content") content: any;
  userName: string = "";
  message: string = "";
  messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMessages();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("chatG/mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }

      this.scrollToBottom();
    });
  }

  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 300);
  }

  sendMessage(){
    var messagesRef = firebase.database().ref().child("chatG/mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.userName });
    this.message = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatInteractivoPage');
  }

}
