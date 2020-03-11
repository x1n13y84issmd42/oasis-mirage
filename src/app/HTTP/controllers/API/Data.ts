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
		resp.status(200).json(User())
	},

	user_fail: function(req: Request, resp: Response) {
		resp.status(200).json(User_Fail())
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