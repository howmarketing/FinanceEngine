import React from 'react';
import { expect } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import { render, act, fireEvent, screen } from '@testing-library/react';
import LoginComponent from 'pages/login/LoginComponent';
// import { describe, expect, test } from '@jest/globals';

it('login component', async () => {

	render(
		<BrowserRouter>
			<LoginComponent />
		</BrowserRouter>
	);
	expect(LoginComponent).toBeTruthy();

	const userInput = screen.queryByPlaceholderText('Usuário');
	const passwordInput = screen.queryByPlaceholderText('Senha');
	const loginDisabledButton = screen.queryByRole<HTMLButtonElement>('button[disabled]', { name: /Entrar/i });
	const loginButton = screen.queryByRole<HTMLButtonElement>('button', { name: /Entrar/i });

	expect(userInput).toBeTruthy();
	expect(passwordInput).toBeTruthy();
	expect(loginDisabledButton).toBeNull();
	expect(loginButton).toBeTruthy();

	await act(async () => {
		if (userInput && passwordInput) {
			fireEvent.change(userInput, { target: { value: 'teste' } });
			fireEvent.change(passwordInput, { target: { value: 'teste1' } });
			fireEvent.blur(userInput);
			fireEvent.blur(passwordInput);
		}
		return;
	});
	await act(async () => {
		if (loginButton) {
			fireEvent.click(loginButton);
			return;
		}
	});

	// test('renders learn react link', () => {
	//   render(
	//     <BrowserRouter>
	//       <LoginComponent />
	//     </BrowserRouter>
	//   );
	//   expect(LoginComponent).toBeTruthy();
	// });
});
