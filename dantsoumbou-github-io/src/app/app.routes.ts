import { Routes } from '@angular/router';
import { Biography } from './homepage/biography/biography';
import { Music } from './homepage/music/music';
import { Poetry } from './homepage/poetry/poetry';
import { Shows } from './homepage/shows/shows';
import { Homepage } from './homepage/homepage'

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'biography',
    component: Biography
  },
  {
    path: 'music',
    component: Music
  },
  {
    path: 'poetry',
    component: Poetry
  },
  {
    path: 'shows',
    component: Shows
  }
];
