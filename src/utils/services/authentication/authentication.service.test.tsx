import { expect } from '@jest/globals';
// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
// import { act } from 'react-dom/test-utils';
// import { describe, expect, test } from '@jest/globals';
// import { fireEvent, render, screen } from '@testing-library/react';

import { AuthenticationService } from 'utils/services/authentication/authentication.service';

// For you can load DOM on jest runs, you need to install jsdom, and configure it on jest.config.js file
// Or you can try at first, add at the very first line of your test file: the doc: @jest-environment jsdom



let authenticationService;

describe('Authentication services', () => {

  beforeAll(() => {
    const toSetUserData = { username: 'teste', password: 'teste', token: 'teste' };

    authenticationService = new AuthenticationService();
    expect(authenticationService).toBeTruthy();

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

  test('authentication as service', () => {
    authenticationService = new AuthenticationService();
    expect(authenticationService).toBeTruthy();
  });

  it('set authentication', () => {
    authenticationService = new AuthenticationService();
    authenticationService.setAuthentication('teste');
    expect(authenticationService.isLoggedIn()).toBeTruthy();
  });

  it('Instantiate authentication service', () => {
    let err = false;
    try {
      authenticationService = new AuthenticationService();
      expect(authenticationService.setUser('teste')).toBeUndefined();
      expect(authenticationService.getUser()).toBe('teste');
      expect(authenticationService.unsetUser()).toBeUndefined();
      expect(authenticationService.isLoggedIn()).toBeFalsy();
      return;
    } catch (Err: any) {
      err = Err;
    }
    expect(err).not.toMatchObject({ code: 'MODULE_NOT_FOUND' });
  });

  it('#2 Instantiate authentication user must to be null, logged must to be false', () => {
    let err = false;
    try {
      authenticationService = new AuthenticationService();
      authenticationService.unsetUser();
      expect(authenticationService.getUser()).toBeNull();
      expect(authenticationService.isLoggedIn()).toBeFalsy();
      return;
    } catch (Err: any) {
      err = Err;
    }
    expect(err).not.toMatchObject({ code: 'MODULE_NOT_FOUND' });
  });
});
