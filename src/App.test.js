import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at )', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus-button');
  expect(minusButton).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-button');
  expect(plusButton).toHaveTextContent('+');
});

test('when the button is pressed, the counter changes to 1', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-button');
  fireEvent.click(plusButton);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonEl = screen.getByTestId('on/off-button');
  expect(buttonEl).toHaveStyle({ background: 'gray' });
});

test('prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const buttonEl = screen.getByTestId('on/off-button');
  fireEvent.click(buttonEl);
  const plusButton = screen.getByTestId('plus-button');
  expect(plusButton).toBeDisabled();
});
