import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes, ROUTES, NOT_FOUND_ROUTE } from './App';

export { ROUTES, NOT_FOUND_ROUTE };

export function render(url: string): string {
  return renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
}
