import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { PostService } from 'src/app/post.service';
//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos el enrutador
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;
  postRef: any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      Estudiante: [''],
      Asignatura: [''],
      Nota: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(res => {
      this.postRef = res;
      this.editForm = this.formBuilder.group({
        Estudiante: [this.postRef.Estudiante],
        Asignatura: [this.postRef.Asignatura],
        Nota: [this.postRef.Nota]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.postService.updatePost(this.editForm.value, id);
    this.router.navigate(['/dashboard/qualifications/show']);
  }

}
