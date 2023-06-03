import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

//impostamos los modulos para la base de datos firebase

import { Estudiante, Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  //Metodo para el crud de notas

  //traer todos lośdatos de la base de datos
  getPosts() {
    return this.angularFirestore
      .collection("posts")
      .snapshotChanges();
  }
  //Solo un documento
  getPostById(id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .valueChanges()
  }

  createPost(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("posts")
        .add(post)
        .then((response) => {
          console.log(response);
        },
          (error) => {
            reject(error)
          })
    })
  }

  updatePost(post: Post, id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({
        Estudiante: post.Estudiante,
        Asignatura: post.Asignatura,
        Nota: post.Nota
      })
  }

  deletePost(post) {
    return this.angularFirestore
      .collection("posts")
      .doc(post.id)
      .delete();
  }

  getEstudiantes() {
    return this.angularFirestore
      .collection("estudiantes")
      .snapshotChanges();
  }

  getEstudianteById(id) {
    return this.angularFirestore
      .collection("estudiantes")
      .doc(id)
      .valueChanges()
  }

  createEstudiante(estudiante: Estudiante) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("estudiantes")
        .add(estudiante)
        .then((response) => {
          console.log(response);
        },
          (error) => {
            reject(error)
          })
    })
  }

  updateEstudiante(estudiante: Estudiante, id) {
    return this.angularFirestore
      .collection("estudiantes")
      .doc(id)
      .update({
        Documento: estudiante.Documento,
        Nombres: estudiante.Nombres,
        Apellidos: estudiante.Apellidos,
        FechaNacimiento: estudiante.FechaNacimiento,
        Celular: estudiante.Celular,
        Direccion: estudiante.Direccion,
        Correo: estudiante.Correo
      })
  }

  deleteEstudiante(estudiante) {
    return this.angularFirestore
      .collection("estudiantes")
      .doc(estudiante.id)
      .delete();
  }

}
