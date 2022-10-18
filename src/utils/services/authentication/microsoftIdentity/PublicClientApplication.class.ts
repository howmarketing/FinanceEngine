import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "utils/services/authentication/microsoftIdentity/config/authConfig";

/**
 * @class PublicClientApplicationClass
 * @description
 * This class is a wrapper for the MSAL PublicClientApplication class.
 * It is used to create a new instance of the MSAL PublicClientApplication class.
 * @see
 */
export class PublicClientApplicationClass extends PublicClientApplication {
	public cryptoHasBeenLoaded: null | boolean = null;
	public crypto: Crypto | null = null;
	static singleton: PublicClientApplicationClass;
	// Override the constructor to load the crypto module as asynchronously way to avoid the error: "ReferenceError: window is not defined"
	constructor(configuration: Configuration = PublicClientApplicationClass.getConfigByEnvDefaults()) {
		super(configuration);
	}


	/**
	 * If the singleton has not been initialized, initialize it
	 * @returns The singleton instance of the PublicClientApplicationClass
	 */
	public static getSingleton(defineCrypto = true): PublicClientApplicationClass {
		// If the singleton has not been initialized, initialize it
		if (!(PublicClientApplicationClass.singleton !== null)) {
			// Initialize the singleton
			PublicClientApplicationClass.singleton = new PublicClientApplicationClass();
			// Set the crypto module
			if (defineCrypto) {
				PublicClientApplicationClass.singleton.setCrypto();
			}
		}
		// Return the singleton
		return PublicClientApplicationClass.singleton;
	}

	/**
	 * This function will return a configuration object that will be used to initialize the MSAL library. The configuration object will be populated with values from the environment variables. If the
	 * environment variables are not set, then the default values will be used
	 * @returns a Configuration object.
	 */
	public static getConfigByEnvDefaults(): Configuration {
		const config: Configuration = { ...msalConfig };
		config.auth = {
			...config.auth,
			clientId: `${process.env?.REACT_APP_MICROSOFT_IDENTITY_AUTH_CLIENT_ID || (msalConfig.auth?.clientId || "")}`,
			authority: `${process.env?.REACT_APP_MICROSOFT_IDENTITY_AUTH_AUTHORITY || (msalConfig.auth?.authority || "")}`
		};
		config.cache = {
			...config.cache,
			cacheLocation: (process?.env?.REACT_APP_MICROSOFT_IDENTITY_AUTH_CACHE_LOCATION || false) || "localStorage", // This configures where your cache will be stored options localStorage || localStorage
			secureCookies: !!((process?.env?.REACT_APP_MICROSOFT_IDENTITY_AUTH_STORE_AUTH_SECURE_COOKIES || false)) ? true : false, // Set this to "true" if you are having issues on IE11 or Edge
			storeAuthStateInCookie: !!((process?.env?.REACT_APP_MICROSOFT_IDENTITY_AUTH_STORE_AUTH_STATE_IN_COOKIE || false)) ? true : false, // Set this to "true" if you are having issues on IE11 or Edge
		};
		return config;
	}

	/**
	 * It sets the value of the crypto and cryptoHasBeenLoaded properties of the  object
	 * @returns the crypto object.
	 */
	setCrypto() {
		// If the crypto module has not been loaded, load it
		const $this = this;
		try {
			// If the crypto module has not been loaded, load it
			const crypto = this.loadCrypto();
			/**
			 * It sets the value of the crypto and cryptoHasBeenLoaded properties of the  object.
			 * @param {Crypto | null} vCrypto - The crypto object that is passed in from the crypto.js file.
			 * @param {boolean | null} vLoaded - boolean | null
			 */
			const defCrypto = (vCrypto: Crypto | null, vLoaded: boolean | null) => {
				try {
					// Verify if this.crypto is null and vCrypto is not null
					const condCrypto = (!(null !== $this.crypto) && null !== vCrypto) && crypto !== false;
					// Verify if $this.cryptoHasBeenLoaded is not null and it is boolean type and vLoaded isn't null
					const condLoaded = (($this.cryptoHasBeenLoaded !== null) && (typeof $this.cryptoHasBeenLoaded === 'boolean')) && (null !== vLoaded);
					// Verify if condCrypto and vCrypto are not null
					$this.crypto = condCrypto ? vCrypto : $this.crypto;
					$this.cryptoHasBeenLoaded = condLoaded ? vLoaded : $this.cryptoHasBeenLoaded;
				} catch (error: any) {
					throw new Error("Could not set the crypto and cryptoHasBeenLoaded properties of the PublicClientApplicationClass object because of error: " + (error?.message || "unknown error message."));
				}
			}

			try {
				// const verification to crypto has been loaded still null and crypto is not false
				const cryptoAlreadyLoaded = ((null !== this.cryptoHasBeenLoaded && this.cryptoHasBeenLoaded === true) && this.crypto !== null);
				if (cryptoAlreadyLoaded) {
					return;
				}
				// If crypto is not false, then set the crypto and cryptoHasBeenLoaded properties
				const defCryptoInstance = (crypto ? crypto : null);
				const defCryptoLoaded = !!(crypto !== false);
				// Set the crypto and cryptoHasBeenLoaded properties
				defCrypto(defCryptoInstance, defCryptoLoaded);
			} catch (e: any) {
				console.error(e);
				// Set the crypto and cryptoHasBeenLoaded properties
				if (!(null !== this.crypto)) {
					this.cryptoHasBeenLoaded = false;
					return;
				}
				// Set the crypto and cryptoHasBeenLoaded properties
				if (null !== this.cryptoHasBeenLoaded && this.cryptoHasBeenLoaded !== true) {
					this.cryptoHasBeenLoaded = true;
					return;
				}
			}
		} catch (e: any) {
			throw new Error("Could not set the crypto module because of error: " + (e?.message || "unknown error message."));

		}

	}

	/**
	 * Load the crypto module asynchronously and return a promise that resolves to the crypto module or false if it fails.
	 * @returns A promise that resolves to the crypto module or false.
	 */
	loadCrypto(): Crypto | false {
		try {
			global.crypto = require('crypto');
			// Require crypto module as the async way
			return (global.crypto || false);
		} catch (e) {
			return false;
		}
	}
}

let publicClientApplicationClassInstance: PublicClientApplicationClass;
export const getPublicClientApplicationClassInstance = (): PublicClientApplicationClass => {
	publicClientApplicationClassInstance = PublicClientApplicationClass.getSingleton(false);
	// if (!!(publicClientApplicationClassInstance.cryptoHasBeenLoaded !== true)) {
	// 	publicClientApplicationClassInstance.loadCrypto();
	// }
	return publicClientApplicationClassInstance;
};
