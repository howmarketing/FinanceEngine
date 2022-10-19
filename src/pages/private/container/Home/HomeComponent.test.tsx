import { act, fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';

describe('dashboard Component', () => {
  it('renders component', () => {
    render(<BrowserRouter><HomeComponent /></BrowserRouter>);
    expect(HomeComponent).toBeTruthy();
  });
});

