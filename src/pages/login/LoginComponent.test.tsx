import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import LoginComponent from './LoginComponent';

test('login component', async () => {

  const { queryByPlaceholderText, queryByRole } = render(
    <BrowserRouter>
      <LoginComponent />
    </BrowserRouter>
  );
  const userInput = queryByPlaceholderText('Usuário');
  const passwordInput = queryByPlaceholderText('Senha');
  expect(userInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  await act(async () => {
    if (userInput && passwordInput) {
      fireEvent.change(userInput, { target: { value: 'teste' } });
      fireEvent.change(passwordInput, { target: { value: 'teste1' } });
      fireEvent.blur(userInput);
      fireEvent.blur(passwordInput);
    }
  });
  await act(async () => {
    const loginButton = queryByRole('button', { name: /Entrar/i });
    expect(loginButton).not.toBeDisabled();
    if (loginButton)
      fireEvent.click(loginButton);
  });

  await act(async () => {
    if (userInput && passwordInput) {
      fireEvent.change(userInput, { target: { value: 'teste' } });
      fireEvent.change(passwordInput, { target: { value: 'teste' } });
    }
  });
  const button = queryByRole('button', { name: /Entrar/i });
  expect(button).toBeDisabled();
});

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <LoginComponent />
    </BrowserRouter>
  );
  expect(LoginComponent).toBeTruthy();
});
