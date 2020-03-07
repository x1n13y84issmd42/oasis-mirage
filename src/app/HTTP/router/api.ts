import { Router } from 'express';
import Public from 'HTTP/controllers/API/Public';
import Meta from 'HTTP/controllers/API/Meta';

const router: Router = Router();
const publicRouter: Router = Router();
const secureRouter: Router = Router();

publicRouter.get("/object/user/:id", Public.user);
publicRouter.get("/object/user/:id/fail", Public.user_fail);

publicRouter.get("/array/users", Public.users);
publicRouter.get("/array/users/fail", Public.users_fail);
publicRouter.get("/array/strings", Public.strings);
publicRouter.get("/array/numbers", Public.numbers);
publicRouter.get("/array/visits", Public.visits);
publicRouter.get("/array/visits/fail", Public.visits_fail);

publicRouter.get("/primitive/string", Public.primitive_string);
publicRouter.get("/primitive/number", Public.primitive_number);
publicRouter.get("/primitive/boolean", Public.primitive_boolean);
publicRouter.get("/primitive/date", Public.primitive_date);

publicRouter.get("/meta/headers/redirect", Meta.redirect);
publicRouter.get("/meta/headers/array", Meta.array);
publicRouter.get("/meta/headers/number", Meta.number);
publicRouter.get("/meta/headers/number/fail", Meta.number_fail);
publicRouter.get("/meta/headers/boolean", Meta.boolean);
publicRouter.get("/meta/headers/boolean/fail", Meta.boolean_fail);

router.use('/public', publicRouter);
router.use('/secure', secureRouter);


export default router;
