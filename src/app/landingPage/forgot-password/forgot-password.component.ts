import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  recuperarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth : AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) { 
    this.recuperarUsuario= this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperar(): void{
    const email = this.recuperarUsuario.value.email;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.info('Se ha enviado un correo para recuperar la contraseña', 'Correo enviado');
      this.router.navigate(['/login']);
      }).catch((error) => {
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
  }

}
