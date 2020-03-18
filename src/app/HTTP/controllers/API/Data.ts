import { Request, Response } from 'express';
import * as faker from 'faker'
import { User, Visit, Visit_Fail, User_Fail } from 'models';

export default {
	users: function(req: Request, resp: Response) {
		resp.status(200).json([
			User(),
			User(),
			User(),
			User(),
		])
	},

	users_fail: function(req: Request, resp: Response) {
		resp.status(200).json({users: [
			User_Fail(),
			User(),
			User(),
			User_Fail(),
		]})
	},

	user: function(req: Request, resp: Response) {
		if (req.params.id.match(/^\d+$/)) {
			let user = User();
			user.id = req.params.id;
			resp.status(200).json(user);
		} else {
			resp.status(404).end();
		}
	},

	user_fail: function(req: Request, resp: Response) {
		resp.status(200).json(User_Fail())
	},

	post_user: function(req: Request, resp: Response) {
		resp.status(201).json(User())
	},
	
	post_user_fail_status: function(req: Request, resp: Response) {
		resp.status(400).send("Bad Request").json(User())
	},

	post_user_fail_data: function(req: Request, resp: Response) {
		resp.status(201).json(User_Fail())
	},

	put_user: function(req: Request, resp: Response) {
		resp.status(200).json(User())
	},

	strings: function(req: Request, resp: Response) {
		resp.status(200).json([
			faker.random.words(~~(Math.random() * 5)),
			faker.random.words(~~(Math.random() * 5)),
			faker.random.words(~~(Math.random() * 5)),
			faker.random.words(~~(Math.random() * 5)),
			faker.random.words(~~(Math.random() * 5)),
		])
	},

	numbers: function(req: Request, resp: Response) {
		resp.status(200).json([
			~~(Math.random() * 5),
			~~(Math.random() * 5),
			~~(Math.random() * 5),
			~~(Math.random() * 5),
			~~(Math.random() * 5),
		])
	},

	visits: function(req: Request, resp: Response) {
		resp.status(200).json([
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
			Visit(),
		])
	},

	visits_fail: function(req: Request, resp: Response) {
		resp.status(200).json([
			Visit_Fail(),
			Visit(),
			Visit(),
			Visit_Fail(),
			Visit_Fail(),
			Visit(),
		])
	},

	primitive_string: function(req: Request, resp: Response) {
		resp.status(200).json(faker.random.words(~~(Math.random() * 5)));
	},

	primitive_number: function(req: Request, resp: Response) {
		resp.status(200).json(~~(Math.random() * 5));
	},

	primitive_boolean: function(req: Request, resp: Response) {
		resp.status(200).json(faker.random.boolean());
	},

	primitive_date: function(req: Request, resp: Response) {
		resp.status(200).json(new Date());
	},
}