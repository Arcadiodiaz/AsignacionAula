import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if (user.user?.emailVerified) {
        this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado');
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/verify-email']);
      }
    }).catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
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

  //Permitir login solo a email que terminen en @elpoli.edu.co
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user?.email?.endsWith('@elpoli.edu.co')) {
          this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado');
          this.router.navigate(['/dashboard']);
        }
        else {
          this.toastr.error('El usuario no tiene permisos para ingresar', 'Error');
          this.afAuth.signOut();
        }
      })
      .catch((error) => {
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }

  /* onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  } */

}
