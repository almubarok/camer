import { render, screen } from '@testing-library/react';
import App from './App';

test('check rendered link', () => {
  render(<App />);
  const linkElement = screen.getByLabelText("testing", {selector: 'input'});
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByLabelText("testing", {selector: 'a'});
  expect(linkElement2).toBeInTheDocument();
});

test('renders image', () => {
  render(<App />);
  const imageElelement = screen.getByRole("image");
  expect(imageElelement).toBeInTheDocument();
});

test('coba bytext', () => {
  render(<App />);
  const imageElelement = screen.getByText(/Ini text buat test/);
  expect(imageElelement).toBeInTheDocument();
});

test('coba byDisplayValue', () => {
  render(<App />);
  const imageElelement = screen.getByDisplayValue(20);
  expect(imageElelement).toBeInTheDocument();
});

