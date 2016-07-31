import { RouterConfig } from '@angular/router';
import { Home } from './home/home.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: '**', redirectTo: 'home' }
];
