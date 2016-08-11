// Angular 2 Universal
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Application
import { AppModule } from './app/app.module';

export function ngApp() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}
