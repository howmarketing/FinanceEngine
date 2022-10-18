import { render } from '@testing-library/react';
import CircleChartComponent from './CircleChartComponent';

describe('Circle Chart Component', () => {
  it('renders component', () => {
    render(<CircleChartComponent />);
    expect(CircleChartComponent).toBeTruthy();
  });
});

