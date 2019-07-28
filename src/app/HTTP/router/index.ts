import { Router, Request, Response } from 'express';
import Home from 'HTTP/controllers/Home';
import apiRouter from './api';

let router: Router = Router();

router.use((req: Request, resp: Response, next: Function) => {
	console.log(`${req.method.toLocaleUpperCase()} @ ${req.path}`);
	next();
});

router.use('/api', apiRouter);
router.get('/', Home.index);

export default router;
