import React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageLayout } from "components/auth/microsoftIdentity/PageLayoutData/PageLayout";

it('Page layout component render', () => {
	const tree = TestRenderer.create(<PageLayout />).toJSON()
	expect(tree).toMatchSnapshot()
})
