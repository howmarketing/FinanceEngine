import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
	const { instance } = useMsal();

	const handleLogout = (logoutType: "popup" | "redirect") => {
		if (logoutType === "popup") {
			instance.logoutPopup({
				postLogoutRedirectUri: "/",
				mainWindowRedirectUri: "/"
			});
		} else if (logoutType === "redirect") {
			instance.logoutRedirect({
				postLogoutRedirectUri: "/",
			});
		}
	}
	return (
		<DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign Out">
			<DropdownItem as="button" onClick={() => handleLogout("popup")}>Sign out using Popup</DropdownItem>
			<DropdownItem as="button" onClick={() => handleLogout("redirect")}>Sign out using Redirect</DropdownItem>
		</DropdownButton>
	)
}
