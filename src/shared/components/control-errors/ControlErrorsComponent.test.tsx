import { render } from '@testing-library/react';
import ControlErrorsComponent from './ControlErrorsComponent';

describe('control errors component', () => {
  test('renders component with different controls', () => {
    const control = { type: 'required' };
    render(<ControlErrorsComponent {...control} />);
    expect(ControlErrorsComponent).toBeTruthy();
    control.type = 'minLength';
    render(<ControlErrorsComponent {...control} />);
    expect(ControlErrorsComponent).toBeTruthy();
    control.type = 'maxLength';
    render(<ControlErrorsComponent {...control} />);
    expect(ControlErrorsComponent).toBeTruthy();
  });
});

