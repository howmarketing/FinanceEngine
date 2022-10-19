import React from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PrivateContainer from 'pages/private/PrivateContainer';


it('renders private container', async () => {
	render(
		<BrowserRouter>
			<PrivateContainer />
		</BrowserRouter>
	);
	expect(PrivateContainer).toBeTruthy();
	const showMenu = screen.queryByTestId('showMenu');
	await act(async () => {
		if (showMenu) {
			fireEvent.click(showMenu);
			const showedMenu = screen.queryByTestId('showedMenu');
			if (showedMenu) {
				fireEvent.click(showedMenu);
			}
		}
	});
});

