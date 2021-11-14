import { render, screen, fireEvent } from '@testing-library/react';
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

// test('coba byDisplayValue', () => {
//   render(<App />);
//   const imageElelement = screen.getByDisplayValue(20);
//   expect(imageElelement).toBeInTheDocument();
// });

test('event click', () => {
  render(<App />);
  const input0 = screen.getByDisplayValue(0);
  expect(input0).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("tambahUmur"))
  const input1 = screen.getByDisplayValue(1);
  expect(input1).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("tambahUmur")) // onclick. onchange, onsubmit
  const inputlast = screen.getByDisplayValue(2);
  expect(inputlast).toBeInTheDocument();
});

test('event onchange', () => {
  render(<App />);
  const inputKosong = screen.getByDisplayValue("");
  expect(inputKosong).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Username"), {target: {value: 'Adi'}})
  const inputUsername = screen.getByPlaceholderText("Username")
  expect(inputUsername).toHaveValue("Adi")
});

