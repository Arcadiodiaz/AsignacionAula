import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get(this.baseUrl);
  } 

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/core/api/usuarios/`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/core/api/usuarios/${id}/`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/core/api/usuarios/`, user)
      .pipe(
        catchError((error: any) => {
          console.error('Error al crear el usuario:', error);
          throw error;
        })
      );
  }
  

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/core/api/usuarios/${id}/`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/core/api/usuarios/${id}/`);
  }

}
