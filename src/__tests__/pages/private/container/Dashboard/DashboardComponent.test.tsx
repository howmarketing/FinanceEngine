import React from 'react';
import TestRenderer from 'react-test-renderer';
import DashboardComponent from "pages/private/container/Dashboard/DashboardComponent";

it('Dashboard component render', () => {
	const tree = TestRenderer.create(<DashboardComponent />).toJSON()
	expect(tree).toMatchSnapshot()
})
