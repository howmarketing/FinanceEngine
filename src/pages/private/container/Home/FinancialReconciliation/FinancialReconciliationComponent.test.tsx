import { act, fireEvent, render } from '@testing-library/react';
import FinancialReconciliationComponent from './FinancialReconciliationComponent copy';

describe('dashboard Component', () => {
  it('renders component', () => {
    render(<FinancialReconciliationComponent />);
    expect(FinancialReconciliationComponent).toBeTruthy();
  });
});

