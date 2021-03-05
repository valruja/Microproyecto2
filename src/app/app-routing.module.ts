import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPeliculaComponent } from './pages/lista-pelicula/lista-pelicula.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Log in', component: LoginComponent },
  { path: 'Movies', component: ListaPeliculaComponent },
  { path: 'Favorites', component: FavoritosComponent },
  { path: 'Register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
