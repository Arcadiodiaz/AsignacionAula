import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {
    
  }

  ngOnInit(): void {
  }

  //usar metdos de auth.service.ts
  loginGoogle() {
    this.authService.GoogleAuth();
  }
  
}
