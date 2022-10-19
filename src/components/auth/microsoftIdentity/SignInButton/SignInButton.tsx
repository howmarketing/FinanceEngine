import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "utils/services/authentication/microsoftIdentity/config/authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = () => {
	const { instance } = useMsal();

	const handleLogin = (loginType: "popup" | "redirect") => {
		if (loginType === "popup") {
			instance.loginPopup(loginRequest).catch(e => {
				// console.log(e);
			});
		} else if (loginType === "redirect") {
			instance.loginRedirect(loginRequest).catch(e => {
				// console.log(e);
			});
		}
	}
	return (
		<DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
			<DropdownItem as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</DropdownItem>
			<DropdownItem as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</DropdownItem>
		</DropdownButton>
	)
}
