import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular 2 Universal
import { UniversalModule } from 'angular2-universal';

// App
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { routing } from './app/app.routing';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    UniversalModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: []
})

export class MainModule {

};
