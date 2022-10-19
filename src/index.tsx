import React from "react";
import ReactDOM from "react-dom/client";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./utils/services/authentication/microsoftIdentity/config/authConfig";
import App from "./App";
/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<MsalProvider instance={msalInstance}>
			<App />
		</MsalProvider>
	</React.StrictMode>
);
