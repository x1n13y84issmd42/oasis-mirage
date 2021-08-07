import {Request, Response} from 'express';

export default {
    get: function(req: Request, resp: Response) {
        resp.status(200).json("Welcome!")
    }
};
