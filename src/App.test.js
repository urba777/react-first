import { render, screen } from '@testing-library/react';
import App from './AppVINTED';

//npm run test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('testas', () => {
  render(<App />);
  expect(5 + 5).toBe(10);
});
