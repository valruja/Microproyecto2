import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
