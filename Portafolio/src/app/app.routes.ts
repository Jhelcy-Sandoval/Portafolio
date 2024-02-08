import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'portafolio',
  loadComponent: () => import('./layout/content/content.component'),
  children:[
    {
      path:'home',
      title: 'Home',
      loadComponent: () => import('./pages/home/home.component')
    },
    {
      path:'projects',
      title: 'Projects',
      loadComponent: () => import('./pages/proyects/proyects.component')
    },
    {
      path:'about-me',
      title: 'About me',
      loadComponent: () => import('./pages/about-me/about-me.component')
    },
    {
      path:'education',
      title: 'education',
      loadComponent: () => import('./pages/education/education.component')
    },
    {
      path:'contact',
      title: 'Contact',
      loadComponent: () => import('./pages/contact/contact.component')
    },
    {
      path:'curriculum',
      title: 'Curriculum',
      loadComponent: () => import('./pages/curriculum/curriculum.component')
    },
    {
      path:'', redirectTo: 'home', pathMatch:'full',
    }
  ]
},
{
  path: '',
  redirectTo: 'portafolio',
  pathMatch:'full'
}

];
