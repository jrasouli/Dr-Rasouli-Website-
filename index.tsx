import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// Old links used hash routing (e.g. /#/about). Send them to the clean URL (/about).
if (window.location.hash.startsWith('#/')) {
  const path = window.location.hash.slice(1);
  window.history.replaceState(null, '', path);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Pre-rendered pages ship their own head tags so crawlers see them without JS.
// Remove them before React renders its own copies to avoid duplicates.
document.head.querySelectorAll('[data-prerender]').forEach((el) => el.remove());

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
