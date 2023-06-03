import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El correo ya esta en uso';
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'El correo no es valido';
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';
      default:
        return 'Error desconocido';
    }
  }

}
