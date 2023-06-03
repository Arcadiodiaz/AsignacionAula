import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrar(): void {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    if (password !== repetirPassword) {
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      /* this.toastr.success('El usuario fue registrado con éxito', 'Usuario registrado');
      this.router.navigate(['/login']); */
      this.verifyEmail();
    }).catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }

  verifyEmail(): void {
    this.afAuth.currentUser.then((user) => {
      user?.sendEmailVerification().then(() => {
        this.toastr.info('Revise su correo para verificar su cuenta', 'Usuario registrado');
        this.router.navigate(['/login']);
      })
    })
  }

  /* onSubmit() {
    this.userService.register(this.formRegister.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
        })
      .catch(error => console.log(error));
  } */

}
