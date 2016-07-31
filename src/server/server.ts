// the polyfills must be the first thing imported in node.js
import 'angular2-universal/polyfills';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { expressEngine } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', expressEngine);
app.set('views', path.join(__dirname, '../client'));
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../dist/client'), {index: false}));

import { ngApp } from './routes/ngApp';

app.get('/', ngApp);
app.get('/home', ngApp);
app.get('/home/*', ngApp);



let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
