// Importing the necessary functions from the '@testing-library/react' library and the 'App' component.
import { render, screen } from '@testing-library/react';
import App from './App';

// A test case to check if the 'learn react' link is rendered in the 'App' component.
test('renders learn react link', () => {
// Rendering the 'App' component.
render(<App />);

// Finding the element that contains the text 'learn react' using the 'screen.getByText' function.
const linkElement = screen.getByText(/learn react/i);

// Asserting that the 'linkElement' is in the document.
expect(linkElement).toBeInTheDocument();
});