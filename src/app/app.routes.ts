import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';
import { ContactoComponent } from './pages/contacto/contacto'; 
import { Acerca } from './pages/acerca/acerca';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'perfil', component: Perfil },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca', component: Acerca },
  { path: '**', component: NotFound }
];