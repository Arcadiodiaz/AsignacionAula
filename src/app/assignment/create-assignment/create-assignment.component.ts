import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AuthService } from 'src/app/services/auth.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent implements OnInit {

  assgForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private assignmentService: AssignmentService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.assgForm = this.fb.group({
      fecha: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_fin: ['', Validators.required],
      aula: ['', Validators.required],
      usuario: ['', Validators.required]
    });
    //obtener nombre de aula
    this.assignmentService.getAulas().subscribe(
      res => {
        this.aulas = res;
      }
    );
    //obtener nombre de usuario con rol profesor
    this.assignmentService.getUsuarios().subscribe(
      //se filtra por rol profesor
      res => {
        this.usuarios = res.filter((usuario: any) => usuario.rol === 2);
      }
    );
  }

  aulas: any = [];
  usuarios: any = [];

  ngOnInit(): void {
  }

  onSubmit() {
    const assignment: Assignment = {
      fecha: this.assgForm.get('fecha')?.value,
      hora_inicio: this.assgForm.get('hora_inicio')?.value,
      hora_fin: this.assgForm.get('hora_fin')?.value,
      aula: this.assgForm.get('aula')?.value,
      usuario: this.assgForm.get('usuario')?.value
    };
    console.log(assignment);
    this.assignmentService.createAssignment(assignment).subscribe(
      res => {
        this.toastr.success('La asignación fue creada con éxito', 'Asignación creada');
        this.router.navigate(['/dashboard/assignments/show']);
      },
      err => {
        this.toastr.error('La asignación no pudo ser creada', 'Error');
      }
    );
  }

}
