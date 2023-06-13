import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/models/asignacion.model';
import { AsignacionService } from 'src/app/services/asignacion.service';
import axios from "axios";

@Component({
  selector: 'app-create-asignacion',
  templateUrl: './create-asignacion.component.html',
  styleUrls: ['./create-asignacion.component.scss']
})
export class CreateAsignacionComponent implements OnInit {

  asignacion: Asignacion = {
    fecha: '',
    hora_inicio: '',
    hora_fin: '',
    aula: '',
    usuario: ''
  };
  submitted = false;

  constructor(private asignacionService: AsignacionService) { }

  ngOnInit(): void {
  }

  saveAsignacion(): void {
    const data = {
      fecha: this.asignacion.fecha,
      hora_inicio: this.asignacion.hora_inicio,
      hora_fin: this.asignacion.hora_fin,
      aula: this.asignacion.aula,
      usuario: this.asignacion.usuario
    };

    /* this.asignacionService.createAsignacion(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.error(error);
        }); */
  }

  newAsignacion(): void {
    this.submitted = false;
    this.asignacion = {
      fecha: '',
      hora_inicio: '',
      hora_fin: '',
      aula: '',
      usuario: ''
    };
  }

  OnSubmit(): void {

    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/core/api/asignaciones/',
      headers: { 'Content-Type': 'application/json' },
      data: {
        fecha: '2023-06-12',
        hora_inicio: '09:00',
        hora_fin: '12:00',
        aula: 1,
        usuario: 2
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

}
