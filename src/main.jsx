import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import your Tailwind CSS here

// Ensure this matches the ID in your HTML
const rootElement = document.getElementById('app');

if (rootElement) {
  // Using React 18+ createRoot API
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found!');
}
