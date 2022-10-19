import { IPublicClientApplication } from "@azure/msal-browser";
import { IApp } from "./App";
test('renders learn react link', () => {
	const appProps: IApp = {
		msalInstance: {} as IPublicClientApplication,
	}
	expect((appProps?.msalInstance || false)).toBeTruthy();
});
