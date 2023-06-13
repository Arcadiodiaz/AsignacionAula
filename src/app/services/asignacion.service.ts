import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignacion } from '../models/asignacion.model';

/* const baseUrl = 'http://localhost:8000/core/api/asignaciones/'; */

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  private url: string = 'http://localhost:8000';

  constructor( private http: HttpClient) { }

  crearAsignacion(asignacion: Asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(`${this.url}/core/api/asignaciones/`, asignacion);
  }

  getAsignacion(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(`${this.url}/core/api/asignaciones/`);
  }

  deleteAsignacion(id: any): Observable<Asignacion> {
    return this.http.delete<Asignacion>(`${this.url}/core/api/asignaciones/${id}/`);
  }

 /*  getAsignacion(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(baseUrl);
  }

  getAsignacionById(id: any): Observable<Asignacion> {
    return this.http.get<Asignacion>(`${baseUrl}${id}/`);
  }

  createAsignacion(data: Asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(baseUrl, data);
  }

  updateAsignacion(id: any, data: Asignacion): Observable<Asignacion> {
    return this.http.put<Asignacion>(`${baseUrl}${id}/`, data);
  }

  deleteAsignacion(id: any): Observable<Asignacion> {
    return this.http.delete<Asignacion>(`${baseUrl}${id}/`);
  }

  finByAsignacion(id: any): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(`${baseUrl}?asignacion=${id}`);
  } */

}
