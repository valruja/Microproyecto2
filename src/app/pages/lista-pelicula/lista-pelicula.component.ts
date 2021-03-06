import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.scss']
})
export class ListaPeliculaComponent implements OnInit {

  title = 'pelicula';
  data: any;
  constructor(private pelicula: PeliculasService) {
    this.pelicula.getData().subscribe((data)=>{
      console.warn(data);
      this.data = data;
    })
   }

  ngOnInit(): void {
  }

}

