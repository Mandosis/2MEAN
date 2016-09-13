import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  // { path: 'home', component: Home },
  { path: '**', redirectTo: '' }
];
