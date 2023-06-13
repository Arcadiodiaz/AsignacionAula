import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;
  user = new User();

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private userService: UserService
  ) {
    /* this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }) */
    //llaamr a la funcion para crear usuario
    
  }

  ngOnInit(): void {
    /* this.saveUser(); */
   /*  this.showMessages(); */
  }

  /* showMessages() {
    this.userService.getMessages().subscribe(res => {
      console.log(res);
    });
  } */

  /* saveUser(): void {
    this.afAuth.authState.pipe(
      switchMap(user => {
        if (user?.displayName) {
          const [firstName, lastName] = user.displayName.split(' ');
          this.user.name = firstName ?? undefined;
          this.user.lastname = lastName ?? undefined;
        }
        this.user.email = user?.email ?? undefined;
        this.user.role = 'Estudiante';
        return this.userService.createUser(this.user);
      })
    ).subscribe(res => {
      console.log(res);
    }, error => {
      console.error(error);
    });
  } */

  /* saveUser(): void {
    this.afAuth.authState.subscribe(user => {
      if (user?.displayName) {
        const nombre = user.displayName.split(' ');
        this.user.name = nombre[0];
        this.user.lastname = nombre[1];
      }
      this.user.email = user?.email!;
      this.user.role = 'Estudiante';
      this.userService.create(this.user).subscribe(res => {
        console.log(res);
      }, error => {
        console.error(error);
      });
    });
  } */


  /* saveUser(): void {
    this.afAuth.authState.subscribe(user => {
    
      if (user?.displayName) {
        const nombre = user.displayName.split(' ');
        this.user.name = nombre[0];
        this.user.lastname = nombre[1];
      }
      this.user.email = user?.email!;
      this.user.role = 'Estudiante';
    });

    this.userService.create().subscribe(res => {
      this.user = res;
      console.log(res);
    }
    );
  } */

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
          this.toastr.success('El usuario fue logueado con éxito', 'Usuario logueado', { positionClass: "toast-bottom-right" });
          this.router.navigate(['/dashboard']);
          console.log(result.user?.email)
          console.log(result)
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
