import React from "react";
import { PathRouteProps, LayoutRouteProps, IndexRouteProps, Route, Routes, RouterProps, NavigationType } from "react-router-dom";
export type IAuthRouteProps = {
	basename?: string;
	location?: Partial<Location> | string;
	navigationType?: NavigationType;
	navigator?: Navigator;
	static?: boolean;
} & {
	path: string;
	AuthRoute: boolean;
	element?: React.ReactNode;
	children?: React.ReactNode;
	fallbackElement?: React.ReactNode;
};
