// Import the necessary modules from the React library and other dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Import the CSS file for styling
import './index.css';

// Import the main component of the application
import App from './App';

// Import the function for reporting web vitals
import reportWebVitals from './reportWebVitals';

// Get the root element from the HTML document
const rootElement = document.getElementById('root');

// Create a root for rendering the application inside the root element
createRoot(rootElement).render(
  // Enable strict mode for enhanced development checks
  <React.StrictMode>
    {/* Set up a router for managing application routing */}
    <Router>
      {/* Render the main App component */}
      <App />
    </Router>
  </React.StrictMode>
);

// Report web vitals for performance monitoring
reportWebVitals();

