import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { notifications, userItems } from './header-data';
import Swal from 'sweetalert2';
import { User } from './user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = new User();

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;

  notifications = notifications;
  userItems = userItems;

  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) { 
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    //obtener datos del usuario
    this.afAuth.authState.subscribe(user => {
      //almacenar datos del usuario para visualizar en el header
        this.user.displayName = user?.displayName!;
        this.user.email = user?.email!;
        this.user.photoURL = user?.photoURL!;
    })
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWith: number): void {
    if(innerWith < 845) {
      this.canShowSearchAsOverlay = true;
    }else{
      this.canShowSearchAsOverlay = false;
    }
  }

  /* logOut(): void {
    this.afAuth.signOut().then(() => {
      this.toastr.info('Sesión cerrada', 'Sesión cerrada');
      this.router.navigate(['/login']);
    })
  } */

  logOut(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Deseas cerrar sesión",
      icon: 'warning',
      confirmButtonColor: '#16a34a',
      confirmButtonText: '¡Sí, cerrar sesión!',
      showCancelButton: true,
      cancelButtonColor: '#dc2626',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.afAuth.signOut().then(() => {
          this.toastr.info('Sesión cerrada', 'Sesión cerrada');
          this.router.navigate(['/login']);
        })
      }
    })
  }
}
