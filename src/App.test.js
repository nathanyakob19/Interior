import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daydream Interio landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /designing dream spaces into reality/i })).toBeInTheDocument();
  expect(screen.getByText(/luxury interiors blended with modern elegance and scientific vastu/i)).toBeInTheDocument();
});
