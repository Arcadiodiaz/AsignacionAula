import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from './firebase-code-error.service';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users ?: User [];

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  GoogleAuth(){
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getStateUser(){
    return this.afAuth.authState;
  }
}
