import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AssignmentService } from '../services/assignment.service';

@Component({
  selector: 'app-dashbody',
  templateUrl: './dashbody.component.html',
  styleUrls: ['./dashbody.component.scss']
})
export class DashbodyComponent implements OnInit {

  constructor(
    private userService: UserService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit(): void {
    //obtener todos los usuarios y contarlos
    this.userService.getUsers().subscribe(
      res => {
        this.usuarios = res;
        this.totalUsuarios = this.usuarios.length;
      }
    );
    //obtener todas las asignaciones y contarlas
    this.assignmentService.getAssignment().subscribe(
      res => {
        this.asignaciones = res;
        this.totalAsignaciones = this.asignaciones.length;
      }
    );
    //obtener todas las aulas y contarlas
    this.assignmentService.getAulas().subscribe(
      res => {
        this.aulas = res;
        this.totalAulas = this.aulas.length;
      }
    );
    //obtener tipo de usuario
    this.assignmentService.getUsuarios().subscribe(
      //almacenar en variable tipo de usuario
      res => {
        this.tipoUsuario = res.filter((usuario: any) => usuario.id === this.usuarios[0].id);
        this.tipoUsuario = this.tipoUsuario[0].rol;
        console.log(this.tipoUsuario);
      }
      
    );
  }

  //obtener todos los usuarios y contarlos
  usuarios: any = [];
  asignaciones: any = [];
  aulas: any = [];
  totalUsuarios: number = 0;
  totalAsignaciones: number = 0;
  totalAulas: number = 0;
  tipoUsuario: number = 0;

}
