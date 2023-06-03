import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth, private router: Router
  ) { }

  googleAuth(){
    return this.AuthLogin(new GoogleAuthProvider())
  }

  toastr: ToastrService;

  AuthLogin(provider){
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado');
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      console.log(error)
    })
  }

  /* AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  } */

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
