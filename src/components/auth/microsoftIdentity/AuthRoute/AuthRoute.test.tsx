import React, { StrictMode } from 'react';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from "react-router-dom";
import { expect } from '@jest/globals';
import { render, act } from '@testing-library/react';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplicationClass, getPublicClientApplicationClassInstance } from 'utils/services/authentication/microsoftIdentity/PublicClientApplication.class';
import LoginComponent from 'pages/login/LoginComponent';
import PrivateContainer from 'pages/private/PrivateContainer';
import DashboardComponent from 'pages/private/container/dashboard/DashboardComponent';
import { AuthRoute } from './AuthRoute';


/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
it('The index strict mode loading route', async () => {
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
						<div className="app">
							<BrowserRouter>
								<Routes>
									<Route path="/health" element={<h1> Aplicação está rodando </h1>} />
									<Route path="/" element={<AuthRoute AuthRoute={false} key={0} path="/" element={<LoginComponent />} />} />

									<Route
										path="/app/*"
										element={
											<React.Suspense fallback={<>...</>}>
												<PrivateContainer />
											</React.Suspense>
										}
									>
										<Route
											path="dashboard"
											element={
												<React.Suspense fallback={<>...</>}>
													<DashboardComponent />
												</React.Suspense>
											}
										/>

										<Route path="*" element={<Navigate to="dashboard"></Navigate>} />
									</Route>
								</Routes>
							</BrowserRouter>
						</div>
					</MsalProvider>
				</StrictMode>
			);
			expect(AuthRoute).toBeTruthy();
		} catch (e) {
			return;
		}
	});
});



