import { Router, Request, Response } from 'express';
import Data from 'HTTP/controllers/API/Data';
import Meta from 'HTTP/controllers/API/Meta';
import Secure from 'HTTP/controllers/API/Secure';
import * as HTTPAuth from 'HTTP/middleware/HTTP';
import * as app from 'app';
const log = app.log('router');

const router: Router = Router();
const publicRouter: Router = Router();
const secureRouter: Router = Router();

publicRouter.get("/object/user/:id", Data.user);
publicRouter.get("/object/user/:id/fail", Data.user_fail);

publicRouter.get("/array/users", Data.users);
publicRouter.get("/array/users/fail", Data.users_fail);
publicRouter.get("/array/strings", Data.strings);
publicRouter.get("/array/numbers", Data.numbers);
publicRouter.get("/array/visits", Data.visits);
publicRouter.get("/array/visits/fail", Data.visits_fail);

publicRouter.get("/primitive/string", Data.primitive_string);
publicRouter.get("/primitive/number", Data.primitive_number);
publicRouter.get("/primitive/boolean", Data.primitive_boolean);
publicRouter.get("/primitive/date", Data.primitive_date);

publicRouter.get("/meta/headers/redirect", Meta.redirect);
publicRouter.get("/meta/headers/array", Meta.array);
publicRouter.get("/meta/headers/number", Meta.number);
publicRouter.get("/meta/headers/number/fail", Meta.number_fail);
publicRouter.get("/meta/headers/integer", Meta.integer);
publicRouter.get("/meta/headers/integer/fail", Meta.integer_fail);
publicRouter.get("/meta/headers/boolean", Meta.boolean);
publicRouter.get("/meta/headers/boolean/fail", Meta.boolean_fail);

secureRouter.use((req: Request, resp: Response, next: Function) => {
	log(`Authorization: ${req.headers.authorization}`);
	next();
});

secureRouter.get("/http-basic/get", HTTPAuth.Basic, Secure.get);
secureRouter.get("/http-digest/get", HTTPAuth.Digest, Secure.get);

router.use('/public', publicRouter);
router.use('/secure', secureRouter);


export default router;
