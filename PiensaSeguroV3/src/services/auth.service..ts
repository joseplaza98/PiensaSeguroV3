import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    constructor(public afDB: AngularFireDatabase,
        public afAuth: AngularFireAuth) {
    }

    LoginConFacebook(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    LoginConGoogle(){
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    Logout(){
        
        return this.afAuth.auth.signOut();
    }
}