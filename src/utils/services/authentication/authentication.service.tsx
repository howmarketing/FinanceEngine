export class AuthenticationService {
  public sessionStorage: Storage;
  constructor() {
    this.sessionStorage = typeof sessionStorage !== 'undefined' ? sessionStorage : window['sessionStorage'];
  }


  setAuthentication(userSession: any): void {
    userSession = JSON.stringify(userSession);
    this.sessionStorage.setItem('userSession', userSession);
  }

  getAuthentication(): any {
    const sessionStorageAuthentication = this.sessionStorage.getItem('userSession');
    return sessionStorageAuthentication ? JSON.parse(sessionStorageAuthentication) : null;
  }

  setUser(user: any): void {
    user = JSON.stringify(user);
    this.sessionStorage.setItem('userSession', user);
  }

  getUser(): any {
    const sessionStorageUser = this.sessionStorage.getItem('userSession');
    return sessionStorageUser ? JSON.parse(sessionStorageUser) : null;
  }

  unsetUser(): void {
    this.sessionStorage.removeItem('userSession');
  }

  isLoggedIn(): boolean {
    const sessionStorageAuthentication = this.sessionStorage.getItem('userSession');
    return sessionStorageAuthentication ? true : false;
  }

}
