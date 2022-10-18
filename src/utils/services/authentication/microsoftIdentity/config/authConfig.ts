/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { LogLevel, Configuration } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig:Configuration = {
    auth: {
        clientId: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_CLIENT_ID || "000x0000-0000-0xx00-xxx0-x00x000x0xxx",
        authority: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_GRAPH_MAIL_ENDPOINT || "https://graph.microsoft.com/v1.0/me",
        redirectUri: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_REDIRECT_URI || "https://graph.microsoft.com/v1.0/me/messages",
    },
    cache: {
        cacheLocation: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_CACHE_LOCATION || "localStorage", // This configures where your cache will be stored options localStorage || localStorage
        secureCookies: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_STORE_AUTH_SECURE_COOKIES ? true : false, // Set this to "true" if you are having issues on IE11 or Edge
        storeAuthStateInCookie: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_STORE_AUTH_STATE_IN_COOKIE ? true : false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: number, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ["User.Read"],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_GRAPH_ME_ENDPOINT || "https://graph.microsoft.com/v1.0/me",
    graphMailEndpoint: process.env.REACT_APP_MICROSOFT_IDENTITY_AUTH_GRAPH_MAIL_ENDPOINT || "https://graph.microsoft.com/v1.0/me/messages",
};
