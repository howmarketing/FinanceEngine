import React from 'react'

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */

export const ProfileData: React.FC<{
	[x: string]: any;
	graphData: {
		[x: string]: any;
		mail?: string;
		surname: String;
		id: string | number;
		givenName: String;
		displayName?: string;
		userPrincipalName: String;
	}
}> = (props) => {
	return (
		<div id="profile-div">
			<p><strong>Id: </strong> {props?.graphData?.id || 'No id given'}</p>
			<p><strong>First Name: </strong> {props?.graphData?.givenName || 'No given name'}</p>
			<p><strong>Last Name: </strong> {props?.graphData?.surname || 'No surname given'}</p>
			<p><strong>Principal Name: </strong> {props?.graphData?.userPrincipalName || 'No principal name given'}</p>
			<p><strong>Email: </strong> {props?.graphData?.mail || 'No e-mail name given'}</p>
		</div>
	)
}
