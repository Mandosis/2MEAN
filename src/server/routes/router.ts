import * as express from 'express';
import { ngApp } from './ngApp';

const router = express.Router();

// Put API routes here

/*
 * Catch all for client side rendering
 * Warning: Must be the last route!
 */
router.get('/*', ngApp);

module.exports = router;