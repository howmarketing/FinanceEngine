import { act, fireEvent, render } from '@testing-library/react';
import BillsReceiveComponent from './BillsReceiveComponent';

describe('dashboard Component', () => {
  it('renders component', () => {
    render(<BillsReceiveComponent />);
    expect(BillsReceiveComponent).toBeTruthy();
  });
});

