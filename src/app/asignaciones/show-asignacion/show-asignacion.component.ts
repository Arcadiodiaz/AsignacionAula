import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/models/asignacion.model';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-show-asignacion',
  templateUrl: './show-asignacion.component.html',
  styleUrls: ['./show-asignacion.component.scss']
})
export class ShowAsignacionComponent implements OnInit {

  asignaciones?: Asignacion[];
  currentAsignacion: Asignacion = {};
  currentIndex = -1;
  title = '';

  constructor( private asignacionService: AsignacionService) { }

  ngOnInit(): void {
    this.retrieveAsignaciones();
  }

  retrieveAsignaciones(): void {
    this.asignacionService.getAsignacion()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.asignaciones = res;
        },
        error: (err) => console.log(err)
      });
  }

  refreshList(): void {
    this.retrieveAsignaciones();
    this.currentAsignacion = {};
    this.currentIndex = -1;
  }

  setActiveAsignacion(asignacion: Asignacion, index: number): void {
    this.currentAsignacion = asignacion;
    this.currentIndex = index;
  }

  deleteAsignacion(): void {
    this.asignacionService.deleteAsignacion(this.currentAsignacion.id)
      .subscribe({
        next: (res) => {
          this.refreshList();
        },
        error: (err) => console.log(err)
      });
      
  }

}
