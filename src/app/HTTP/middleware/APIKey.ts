import {Request, Response} from 'express';
import * as app from 'app';
const log = app.log('apikey');

const THE_KEY = "GOT_A_SECRET_CAN_YOU_KEEP_IT";

function ValidateAPIKey(key: string, name: string, location: string, resp: Response, next: Function) {
	log(`Validating an API key "${key}" coming from a "${name}" ${location}`);
	if (key === THE_KEY) {
		log("The key is fine.")
		return next && next();
	} else {
		log("The key is wrong, 403.")
		return resp.status(403).send(`Expected an API key in the "${name}" ${location}.`);
	}
}

export function Cookie(cookieName: string) {
	return (req: Request, resp: Response, next: Function) => {
		return next && next();
	}
}

export function Header(headerName: string) {
	return (req: Request, resp: Response, next: Function) => {
		return ValidateAPIKey(req.header(headerName), headerName, "header", resp, next);
	}
}

export function Query(paramName: string) {
	return (req: Request, resp: Response, next: Function) => {
		log(`Query:`, req.query);
		return ValidateAPIKey(req.query[paramName], paramName, "query parameter", resp, next);
	}
}
