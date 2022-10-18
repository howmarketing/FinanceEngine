import { AuthenticationService } from './authentication.service';

describe('Authentication services', () => {

  it('set authentication', () => {
    const authenticationService = new AuthenticationService();
    authenticationService.setAuthentication('teste');
    expect(authenticationService.isLoggedIn()).toBeTruthy();
  });

  test('authentication as service', () => {
    const authenticationService = new AuthenticationService();
    expect(authenticationService).toBeTruthy();
  });

  test('authentication functions call', async () => {
    const authenticationService = new AuthenticationService();
    expect(authenticationService.setUser('teste')).toBeUndefined();
    expect(authenticationService.getUser()).toBe('teste');
    expect(authenticationService.unsetUser()).toBeUndefined();
    expect(authenticationService.isLoggedIn()).toBeFalsy();
  });

  test('null authentication', () => {
    const authenticationService = new AuthenticationService();
    authenticationService.unsetUser();
    expect(authenticationService.getUser()).toBeNull();
    expect(authenticationService.isLoggedIn()).toBeFalsy();
  });

});
