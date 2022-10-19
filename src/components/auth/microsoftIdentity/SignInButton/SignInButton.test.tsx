/* eslint-disable testing-library/no-unnecessary-act */
import React, { StrictMode } from 'react';
import { expect } from '@jest/globals';
import { render, act } from '@testing-library/react';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplicationClass, getPublicClientApplicationClassInstance } from 'utils/services/authentication/microsoftIdentity/PublicClientApplication.class';
import { SignInButton } from "components/auth/microsoftIdentity/SignInButton/SignInButton";
import { BrowserRouter } from 'react-router-dom';

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
it('The index strict mode load', async () => {
	global.crypto = require('crypto');
	await act(async () => {
		var msalInstance = await getPublicClientApplicationClassInstance();
		const crypto = await msalInstance.loadCrypto();

		expect(crypto).toBeTruthy();
		expect(msalInstance).not.toBe(null);
		expect(msalInstance).not.toBe(undefined);
		expect(msalInstance).not.toBe(false);
		expect<PublicClientApplicationClass>(msalInstance).toBeInstanceOf(PublicClientApplicationClass);
		render(
			<StrictMode>
				<MsalProvider instance={msalInstance}>
					<BrowserRouter>
						<SignInButton />
					</BrowserRouter>
				</MsalProvider>
			</StrictMode>
		);
		expect(SignInButton).toBeTruthy();
	});
});
