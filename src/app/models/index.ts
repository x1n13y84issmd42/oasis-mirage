import * as faker from 'faker'

export function User() {
	return {
		id: faker.random.number(),
		name: `${faker.name.firstName()} ${faker.name.lastName()}`,
		email: `${faker.internet.email()}`,
		createdAt: faker.date.past(),
		token: faker.random.uuid()
	}
}

export function User_Fail() {
	return {
		// id: faker.random.number(),
		name: faker.random.number(),
		email: `${faker.internet.email()}`,
		createdAt: faker.date.past(),
		token: faker.random.uuid()
	}
}

export function Visit() {
	return {
		IP: faker.internet.ip(),
		counter: faker.random.number(10000),
		createdAt: faker.date.recent(),
	};
}

export function Visit_Fail() {
	return {
		IP: faker.internet.ip(),
		counterrr: faker.random.number(10000),
		createdAt: faker.random.number(100),
	};
}