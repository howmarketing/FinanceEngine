import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import Center from './Center/CenterPageLayout';
import { SignInButton } from "../SignInButton/SignInButton";
import { SignOutButton } from "../SignOutButton/SignOutButton";
/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout: React.FC<{ [x: string]: any }> = (props) => {
	const isAuthenticated = useIsAuthenticated();
	return (
		<>
			<Navbar bg="primary" variant="dark">
				<a className="navbar-brand" href="/">Microsoft Identity Platform</a>
				{isAuthenticated ? <SignOutButton /> : <SignInButton />}
			</Navbar>
			<h5>
				<Center>
					Welcome to the Microsoft Authentication Library For Javascript - React Quickstart
				</Center>
			</h5>
			<br />
			<br />
			{props.children}
		</>
	);
};
