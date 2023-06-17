import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  createAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.url}/core/api/asignaciones/`, assignment);
  }

  getAssignment(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.url}/core/api/asignaciones/`);
  }

  deleteAssignment(id: any): Observable<any> {
    return this.http.delete(`${this.url}/core/api/asignaciones/${id}/`);
  }

  updateAssignment(id: any, assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.url}/core/api/asignaciones/${id}/`, assignment);
  }

  getAssignmentById(id: any): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.url}/core/api/asignaciones/${id}/`);
  }

  getAulas(): Observable<any> {
    return this.http.get<any>(`${this.url}/core/api/aulas/`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.url}/core/api/usuarios/`);
  }

}
