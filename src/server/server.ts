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

/*
 * Configure Express.js rendering engine
 */
app.engine('.html', expressEngine);
app.set('views', path.join(__dirname, '../client'));
app.set('view engine', 'html');

/*
 * Configure Middleware
 */
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

/*
 * Set directory to serve static assets from
 */
app.use(express.static(path.join(__dirname, '../../dist/client'), {index: false}));

/*
 * Router
 * Description: Handles routing in express. See routes/router.ts
 */
import * as router from './routes/router';

app.use('/', router);

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
