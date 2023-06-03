import { Component, OnInit } from '@angular/core';
/* Importar Modelo */
import { Post } from 'src/app/post.model';
/* Importar Servicio */
import { PostService } from 'src/app/post.service';
import Swal from 'sweetalert2';
PostService

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  Posts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });
  }

  /* deleteRow= (post) => {
    this.postService.deletePost(post);
  } */

  deleteRow= (post) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deletePost(post);
        Swal.fire(
          '¡Borrado!',
          'Tu archivo ha sido borrado.',
          'success'
        )
      }
    })
  }
}
