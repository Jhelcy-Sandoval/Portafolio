import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'portafolio',
  loadComponent: () => import('./layout/content/content.component'),
  children:[
    {
      path:'inicio',
      title: 'Inicio',
      loadComponent: () => import('./pages/home/home.component')
    },
    {
      path:'proyectos',
      title: 'Proyectos',
      loadComponent: () => import('./pages/proyects/proyects.component')
    },
    {
      path:'sobre-mi',
      title: 'Sobre mí',
      loadComponent: () => import('./pages/about-me/about-me.component')
    },
    {
      path: 'servicios',
      title: 'Servicios',
      loadComponent: () => import('./pages/education/education.component')
    },
    {
      path:'', redirectTo: 'inicio', pathMatch:'full',
    }
  ]
},
{
  path: '**',
  redirectTo: 'portafolio',
  pathMatch:'full'
}

];
