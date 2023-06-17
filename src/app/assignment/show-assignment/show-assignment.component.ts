import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-assignment',
  templateUrl: './show-assignment.component.html',
  styleUrls: ['./show-assignment.component.scss']
})
export class ShowAssignmentComponent implements OnInit {

  assignments?: Assignment[];
  currentAssignment: Assignment = {};
  currentIndex = -1;
  title = '';

  constructor( private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.retrieveAssignments();
    this.refreshList();
  }

  retrieveAssignments(): void {
    this.assignmentService.getAssignment()
      .subscribe({
        next: (res) => {
          //modificar fecha formato aaaa-mm-dd a dd/mm/aaaa y en hora de 07:00:00 a 07:00
          for (let i = 0; i < res.length; i++) {
            let fecha = res[i].fecha;
            let fechaFormato = fecha.split('-');
            let fechaFinal = fechaFormato[2] + '/' + fechaFormato[1] + '/' + fechaFormato[0];
            res[i].fecha = fechaFinal;
            let horaInicio = res[i].hora_inicio;
            let horaInicioFormato = horaInicio.split(':');
            let horaInicioFinal = horaInicioFormato[0] + ':' + horaInicioFormato[1];
            res[i].hora_inicio = horaInicioFinal;
            let horaFin = res[i].hora_fin;
            let horaFinFormato = horaFin.split(':');
            let horaFinFinal = horaFinFormato[0] + ':' + horaFinFormato[1];
            res[i].hora_fin = horaFinFinal;
          }
          this.assignments = res;
          /* console.log(res);
          this.assignments = res; */
        },
        error: (err) => console.log(err)
      });
  }

  refreshList(): void {
    this.retrieveAssignments();
    this.currentAssignment = {};
    this.currentIndex = -1;
  }

  setActiveAssignment(assignment: Assignment, index: number): void {
    this.currentAssignment = assignment;
    this.currentIndex = index;
  }

  deleteAssignment(id: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', //color azul
      cancelButtonColor: '#d33', //color rojo
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.assignmentService.deleteAssignment(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.refreshList();
            },
            error: (err) => console.log(err)
          });
        Swal.fire(
          '¡Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        )
      }
    })
  }

}
