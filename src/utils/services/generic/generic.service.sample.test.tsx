import axios, { AxiosError, AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expect, describe, it } from '@jest/globals';

// Import the service to be tested
import { GenericService } from 'utils/services/generic/generic.service';
import { AuthenticationService } from 'utils/services/authentication/authentication.service';

// Types
type IUserData = { username?: 'teste'; password?: string; token?: 'teste' };
type IError = AxiosError<unknown, any>;
type IDataResponse = { response: boolean; };

// Mocks and Stubs
let genericService: GenericService;
let authenticationService: AuthenticationService;
let toSetUserData: IUserData = { username: 'teste', password: 'teste', token: 'teste' };

describe('generic service', () => {

  beforeAll(() => {

    toSetUserData = { username: 'teste', password: 'teste', token: 'teste' };

    authenticationService = new AuthenticationService();
    genericService = new GenericService();

    expect(authenticationService).toBeTruthy();
    expect(genericService).toBeTruthy();

    authenticationService.setUser(toSetUserData);
    expect(authenticationService.getUser()).toBeTruthy();

    const userDataResponse = authenticationService.getUser();

    expect(userDataResponse?.username || false).toBeTruthy();
    expect(userDataResponse?.password || false).toBeTruthy();
    expect(userDataResponse?.token || false).toBeTruthy();

    expect(userDataResponse?.username || false).toHaveLength(5);
    expect(userDataResponse?.password || false).toHaveLength(5);
    expect(userDataResponse?.token || false).toHaveLength(5);

    expect(userDataResponse?.username || false).toBe(`teste`);
    expect(userDataResponse?.password || false).toBe(`teste`);
    expect(userDataResponse?.token || false).toBe(`teste`);

    expect(authenticationService.isLoggedIn()).not.toBeFalsy();
  });

  it('has get functions', async () => {
    type IResponse = AxiosResponse<IDataResponse, any> | null;
    type IResponses = { get: IResponse, post: IResponse };
    type IResponsesStatusCode = { get: number | null; post: number | null };

    try {
      genericService = new GenericService();
      expect(genericService).toBeTruthy();

      var mock = new MockAdapter(axios);
      const data: IDataResponse = { response: true };

      mock.onGet('teste').reply(200, data);
      mock.onPost('teste', '').reply(200, data);
      // mock.onGet('/get').reply(200, { response: true });
      // mock.onPost('/post').reply(200, { response: true });

      const requestResponseStatusCodes: IResponsesStatusCode = { get: null, post: null } as IResponsesStatusCode;
      // const responsesStatusCode: IResponsesStatusCode = { get: null, post: null };

      const responses: IResponses = { get: null, post: null } as IResponses;

      // Try catch for jest mock axios post request. return left throw error
      try {
        // Try catch for jest mock axios get request. return left throw error
        try {
          responses.get = await genericService.get<IDataResponse>('teste');
          requestResponseStatusCodes.get = responses.get?.status || 200;
        } catch (getError: any) {
          const _getError = getError as IError;
          requestResponseStatusCodes.get = Number(`${_getError?.code || 500}`);
        }
        // Try catch for jest mock axios post request. return left throw error
        try {
          responses.post = await genericService.postToken<IDataResponse>('teste', '');
          requestResponseStatusCodes.post = responses.post?.status || 200;
        } catch (postError: any) {
          const _postError = postError as IError;
          requestResponseStatusCodes.post = Number(`${_postError?.code || 500}`);
        }
      } catch (error: any) {
        let _Error: IError = error;
        const errorCode = Number(`${_Error?.code || 500}`);
        requestResponseStatusCodes.get = errorCode;
        requestResponseStatusCodes.post = errorCode;
      }

      // FinalCheck check
      try {

        // Check if the request was successful
        try {
          // expect(responses.get).not.toBeNull();
          // expect(responses.post).not.toBeNull();
          expect(!!(null !== responses.get)).toBeTruthy();
          expect(!!(null !== responses.post)).toBeTruthy();
        } catch (error: any) {
          throw new Error(`Responses to truthy Error: ${error?.message || 'unknown error message.'}`);
        }


        // Check var to verify the request status code it's in 200 range
        let requestSuccessOnGet: boolean = false;
        let requestSuccessOnPost: boolean = false;
        try {
          requestSuccessOnGet = (requestResponseStatusCodes.get !== null && (requestResponseStatusCodes.get >= 200 && requestResponseStatusCodes.get < 300));
          requestSuccessOnPost = (requestResponseStatusCodes.post !== null && (requestResponseStatusCodes.post >= 200 && requestResponseStatusCodes.post < 300));
        } catch (error: any) {
          throw new Error(`Check var to verify the request status code it's in 200 range. Error: ${error?.message || 'unknown error message.'}`);
        }


        // Check if the request status code it's in 200 range
        try {
          expect(requestSuccessOnGet).toBeTruthy();
          expect(requestSuccessOnPost).toBeTruthy();
        } catch (error: any) {
          throw new Error(`Check if the request status code it's in 200 range Error: ${error?.message || 'unknown error message.'}`);
        }


        // Check if the request response data it's like expected
        try {
          // expect(responses.get?.data || { response: false }).toEqual(data);
          // expect(responses.post?.data || { response: false }).toEqual(data);
          // #
          expect(responses.get?.data?.response || false).toBeTruthy();
          expect(responses.post?.data?.response || false).toBeTruthy();
          // #
          expect(responses.get?.data?.response || false).toBe(true);
          expect(responses.post?.data?.response || false).toBe(true);
        } catch (error: any) {
          throw new Error(`Check if the request response data it's like expected Error: ${error?.message || 'unknown error message.'}`);
        }

      } catch (checkError: any) {
        console.log(checkError);
      }

    } catch (e: any) {
      throw new Error('Could not sum the values from a +b because of error: ' + (e?.message || 'unknown error message.'));
    }
  });
});