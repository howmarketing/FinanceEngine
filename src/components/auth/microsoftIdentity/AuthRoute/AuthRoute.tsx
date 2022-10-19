import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { IAuthRouteProps } from "types/components/AuthRoute/AuthRoute";

/**
 * Create a component that will be used as route component loading the children element wrapped by layers as:
 *  1 - Auth component as boolean to chose if route is for authorized or not authorized;
 *  2 - If the attribute of choice "Auth" it is true, them the children element will be wrapped by the element AuthenticatedTemplate;
 *  3 - If the attribute of choice "Auth" it is false, them the children element will be wrapped by the element UnauthenticatedTemplate;
 *  4 - Suspense component to load the children element;
 */
export const AuthRoute: React.FC<IAuthRouteProps> = ({ AuthRoute, children, path, element, ...rest }) => {
	const LoadElement = () => {
		return (
			<>
				{element || ''}
				{children || ''}
				{(!(element && children) ? <p>No component founded</p> : '')}
			</>
		);
	}
	useEffect(() => {
		const DOMLoaded = true;
		if (DOMLoaded) {
			console.log({ AuthRoute, children, path, element, ...rest });
		}
	}, []);
	return (
		<React.Suspense fallback={<>...</>}>
			{AuthRoute ? (
				<AuthenticatedTemplate>
					<LoadElement />
				</AuthenticatedTemplate>
			) : (
				<UnauthenticatedTemplate>
					<LoadElement />
				</UnauthenticatedTemplate>
			)}
		</React.Suspense>
	);
}
