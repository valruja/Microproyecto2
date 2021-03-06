import { Component, Input, OnInit } from '@angular/core';
import { PostPeliculas } from 'src/app/modelos/post-peliculas';

@Component({
  selector: 'app-post-peliculas',
  templateUrl: './post-peliculas.component.html',
  styleUrls: ['./post-peliculas.component.scss']
})
export class PostPeliculasComponent implements OnInit {
  @Input() post!: PostPeliculas;

  constructor() { }

  ngOnInit(): void {
  }

}
