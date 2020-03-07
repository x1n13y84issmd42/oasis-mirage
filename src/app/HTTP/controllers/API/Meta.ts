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
		resp.status(200).setHeader("X-Num", ["42"])
		resp.end()
	},

	number_fail: function(req: Request, resp: Response) {
		resp.status(200).setHeader("X-Num", ["fourty two"])
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
}