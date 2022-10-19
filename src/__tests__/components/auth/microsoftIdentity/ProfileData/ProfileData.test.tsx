import React from "react";
import TestRenderer from 'react-test-renderer';
import { ProfileData } from "components/auth/microsoftIdentity/ProfileData/ProfileData";

it('ProfileData component render', () => {
	const tree = TestRenderer.create(<ProfileData key={'jest-test'} graphData={{ id: "1", givenName: "Test", surname: "Jest. ", userPrincipalName: "Jest test" }} />).toJSON()
	expect(tree).toMatchSnapshot()
})
