import { Request, Response } from 'express';
import * as faker from 'faker'
import { User, Visit, Visit_Fail, User_Fail } from 'models';

export default {
	redirect: function(req: Request, resp: Response) {
		resp.redirect("http://example.com");
	},

	array: function(req: Request, resp: Response) {
		resp.status(200).setHeader("Pragma", ["pragmatic pregnancy", "prognosis"])
		resp.end();
	},

	number: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Num", ["3.1415"])
		resp.end()
	},

	number_fail: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Num", ["A Pie!"])
		resp.end()
	},

	integer: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Num", ["42"])
		resp.end()
	},

	integer_fail: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Num", ["fourty something"])
		resp.end()
	},
	
	boolean: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Truth", [Math.random() > 0.5 ? "true" : "false"])
		resp.end()
	},
	
	boolean_fail: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Truth", ["who knows"])
		resp.end()
	},
	
	query_echo_headers: function(req: Request, resp: Response) {
		if (!req.query.p1) return resp.status(400).send(`p1 query parameter is required`);
		if (!req.query.p2) return resp.status(400).send(`p2 query parameter is required`);
	
		for (let qn in req.query) {
			resp.setHeader(`x-${qn}`, req.query[qn])
			console.log(`Added header x-${qn} from a query parameter ${qn} with a value of "${req.query[qn]}"`)
		}
		resp.status(200).end();
	},
	
	query_echo_body: function(req: Request, resp: Response) {
		if (!req.query.p1) return resp.status(400).send(`p1 query parameter is required`);
		if (!req.query.p2) return resp.status(400).send(`p2 query parameter is required`);
	
		let res = {};
		for (let qn in req.query) {
			res[`prop_${qn}`] = req.query[qn];
		}

		resp.status(200).json(res);
	},
	
	headers_echo_body: function(req: Request, resp: Response) {
		if (!req.headers['x-header']) return resp.status(400).send(`x-header header is required`);
		if (!req.headers['x-armer']) return resp.status(400).send(`x-armer header is required`);

		let res = {};
		for (let qn in req.headers) {
			res[`prop_${qn.substr(2)}`] = req.headers[qn];
		}

		resp.status(200).json(res);
	},
}
