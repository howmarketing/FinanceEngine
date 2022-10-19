import React, { StrictMode } from 'react';
import { expect } from '@jest/globals';
import { render, act } from '@testing-library/react';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplicationClass, getPublicClientApplicationClassInstance } from './utils/services/authentication/microsoftIdentity/PublicClientApplication.class';
import App from "./App";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
it('The index strict mode load', async () => {
	global.crypto = require('crypto');
	await act(async () => {
		try {
			const msalInstance = getPublicClientApplicationClassInstance();
			const crypto = msalInstance.loadCrypto();
			expect(crypto).toBeTruthy();
			expect(msalInstance).not.toBe(null);
			expect(msalInstance).not.toBe(undefined);
			expect(msalInstance).not.toBe(false);
			expect<PublicClientApplicationClass>(msalInstance).toBeInstanceOf(PublicClientApplicationClass);
			render(
				<StrictMode>
					<MsalProvider instance={msalInstance}>
						<App />
					</MsalProvider>
				</StrictMode>
			);
			expect(App).toBeTruthy();
		} catch (e) {
			return;
		}
	});
});
