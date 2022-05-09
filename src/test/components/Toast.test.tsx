import { render, screen } from '@testing-library/react';
import Toast from '../../components/Toast/toast';

test('renders Toast', () => {
  render(<Toast show message='toast 内容'/>);
  const headerElement = screen.getByText(/toast 内容/i);
  expect(headerElement).toBeInTheDocument();
});

