import { RouterConfig } from '@angular/router';
import { App } from './app.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: App },
  { path: '**', redirectTo: 'home' }
];
