export class AuthenticationService {

	setAuthentication(userSession: any): void {
		userSession = JSON.stringify(userSession);
		sessionStorage.setItem('userSession', userSession);
	}

	getAuthentication(): any {
		const sessionStorageAuthentication = sessionStorage.getItem('userSession');
		return sessionStorageAuthentication ? JSON.parse(sessionStorageAuthentication) : null;
	}

	setUser(user: any): void {
		user = JSON.stringify(user);
		sessionStorage.setItem('userSession', user);
	}

	getUser(): any {
		const sessionStorageUser = sessionStorage.getItem('userSession');
		return sessionStorageUser ? JSON.parse(sessionStorageUser) : null;
	}

	unsetUser(): void {
		sessionStorage.removeItem('userSession');
	}

	isLoggedIn(): boolean {
		const sessionStorageAuthentication = sessionStorage.getItem('userSession');
		return sessionStorageAuthentication ? true : false;
	}

}
