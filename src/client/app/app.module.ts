// Angular 2
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// App
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

};
