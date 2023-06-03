import { Component, OnInit } from '@angular/core';

//importamos el servicio
import { PostService } from 'src/app/post.service';
//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos el enrutador
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public postForm:FormGroup; //creamos una variable publica del tipo FormGroup

  constructor( 
    public postService:PostService,
    public formBuilder:FormBuilder,
    public router:Router
  ) {
    this.postForm = this.formBuilder.group({
      Estudiante: [''],
      Asignatura: [''],
      Nota: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value)
    this.router.navigate(['/dashboard/qualifications/show'])
  }

}