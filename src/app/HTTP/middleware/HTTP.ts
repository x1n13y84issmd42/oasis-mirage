import { Request, Response } from 'express';
import * as CryptoJS from "crypto-js"
import { ParseAuthorization, GenerateNonsense } from './utility';

const realm = 'Oasis'
const users = {
	'admin': '4dm1n_31337',
	'user': '123',
	'singlemominyourarea': 'qwerty'
};

const credsBasic = Object.entries(users).map(kv => 'Basic ' + Buffer.from(`${kv[0]}:${kv[1]}`).toString('base64'))

/**
 * An HTTP Basic authentication middleware.
 */
export function Basic(req: Request, resp: Response, next) {
	if (credsBasic.includes(req.headers.authorization)) {
		return next();
	}

	resp.set('WWW-Authenticate', `Basic realm="${realm}"`);
	resp.status(401).send('Authentication required.');
}

/**
 * An HTTP Digest authentication middleware.
 */
export function Digest(req: Request, resp: Response, next) {
	let auth = ParseAuthorization(req.headers.authorization);

	let password = users[auth.username]
	let HA1Src = [auth.username, auth.realm, password].join(':');
	let HA2Src = [req.method, auth.uri].join(':');
	let HA1 = '' + CryptoJS.MD5(HA1Src);
	let HA2 = '' + CryptoJS.MD5(HA2Src);
	let rebuilt = '' + CryptoJS.MD5([HA1, auth.nonce, HA2].join(':'));

	if (rebuilt === auth.response) {
		return next();
	}

	resp.set('WWW-Authenticate', [
		`Digest realm="${realm}"`,
		// 'qop="auth,auth-int"',	//TODO
		`nonce="${GenerateNonsense(32)}"`,
		`opaque="${GenerateNonsense(32)}"`
	].join(','));
	resp.status(401).send('Authentication required.');
}
