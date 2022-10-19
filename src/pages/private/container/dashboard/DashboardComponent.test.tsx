import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import DashboardComponent from './DashboardComponent';

describe('dashboard Component', () => {
	it('renders component', () => {
		render(<DashboardComponent />);
		expect(DashboardComponent).toBeTruthy();
	});
});

it('dashboard Component render snapshot', () => {
	const tree = TestRenderer.create(<DashboardComponent />).toJSON()
	expect(tree).toMatchSnapshot()
})
