import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AuthService } from 'src/app/services/auth.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.scss']
})
export class EditAssignmentComponent implements OnInit {

  assgForm: FormGroup;
  ref: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private assignmentService: AssignmentService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute
  ) { 
    this.assgForm = this.fb.group({
      fecha: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_fin: ['', Validators.required],
      aula: ['', Validators.required],
      usuario: ['', Validators.required]
    });
  }

  aulas: any = [];
  usuarios: any = [];

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.assignmentService.getAssignmentById(id).subscribe(
      res => {
        console.log(res);
        this.ref = res;
        this.assgForm.patchValue({
          fecha: this.ref.fecha,
          hora_inicio: this.ref.hora_inicio,
          hora_fin: this.ref.hora_fin,
          aula: this.ref.aula,
          usuario: this.ref.usuario
        });
      }
    );
    //obtener nombre de aula
    this.assignmentService.getAulas().subscribe(
      res => {
        this.aulas = res;
      }
    );
    //obtener nombre de usuario
    this.assignmentService.getUsuarios().subscribe(
      res => {
        this.usuarios = res.filter((usuario: any) => usuario.rol === 2);
      }
    );
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
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.assignmentService.updateAssignment(id, assignment).toPromise().then(
      res => {
        this.toastr.success('Asignación actualizada con éxito', 'Asignación actualizada');
        this.router.navigate(['/dashboard/assignments/show']);
      },
      err => {
        this.toastr.error('No se pudo actualizar la asignación', 'Error');
        console.log(err);
      }
    );
  }

}
