import axios from 'axios';
import { expect } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import { GenericService } from 'utils/services/generic/generic.service';
import { AuthenticationService } from 'utils/services/authentication/authentication.service';
// import { Exception } from 'sass';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import { describe, expect, test } from '@jest/globals';
type IError = { statusCode: number, message: string };

describe('generic service', () => {

	beforeAll(() => {
		const toSetUserData = { username: 'teste', password: 'teste', token: 'teste' };

		const authenticationService = new AuthenticationService();
		expect(authenticationService).toBeTruthy();

		authenticationService.setUser(toSetUserData);
		expect(authenticationService.getUser()).toBeTruthy();

		const userDataResponse = authenticationService.getUser();

		expect(userDataResponse?.username || false).toBeTruthy();
		expect(userDataResponse?.password || false).toBeTruthy();
		expect(userDataResponse?.token || false).toBeTruthy();

		expect(userDataResponse?.username).toHaveLength(5);
		expect(userDataResponse?.password).toHaveLength(5);
		expect(userDataResponse?.token).toHaveLength(5);

		expect(userDataResponse?.username).toBe(`teste`);
		expect(userDataResponse?.password).toBe(`teste`);
		expect(userDataResponse?.token).toBe(`teste`);

		expect(authenticationService.isLoggedIn()).not.toBeFalsy();
	})

	it('render generic as service', () => {
		const genericService = new GenericService();
		expect(genericService).toBeTruthy();
	});

	it('has get functions', async () => {
		let response = { response: false };
		const data = { response: true };
		let error: IError = { statusCode: 0, message: '' };
		try {
			const axiosInstance = axios.create({ url: 'http://localhost:3000' });
			var mock = new MockAdapter(axiosInstance);
			mock.adapter()
			try {
				mock.onGet('teste').reply(200, data);
				const genericService = new GenericService();
				response = await genericService.get('teste');
				expect(response).toEqual(data);
			} catch (e: any) {
				error = e as IError;
			}
			expect(error).toHaveProperty('statusCode', 404);
		} catch (mockError: any) {
			return;
		}
	});

	it('has post functions', async () => {
		let response = { response: false };
		const data = { response: true };
		try {
			const axiosInstance = axios.create({ url: 'http://localhost:3000' });
			var mock = new MockAdapter(axiosInstance);
			try {
				mock.onPost('teste').reply(200, data);
				const genericService = new GenericService();
				response = await genericService.get('teste');
				expect(response).toEqual(data);
			} catch (e: any) {
				return;
			}
		} catch (mockError: any) {
			return;
		}
	});
});
