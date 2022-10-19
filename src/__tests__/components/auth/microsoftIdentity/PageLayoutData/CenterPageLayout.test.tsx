import React from 'react';
import TestRenderer from 'react-test-renderer';
import Center from 'pages/private/container/dashboard/DashboardComponent';

it('Page layout center component render', () => {
	const tree = TestRenderer.create(<Center />).toJSON()
	expect(tree).toMatchSnapshot();
})
