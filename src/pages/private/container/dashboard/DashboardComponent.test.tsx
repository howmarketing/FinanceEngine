import React from 'react';
import { render } from '@testing-library/react';
import DashboardComponent from './DashboardComponent';

describe('dashboard Component', () => {
	it('renders component', () => {
		render(<DashboardComponent />);
		expect(DashboardComponent).toBeTruthy();
	});
});
