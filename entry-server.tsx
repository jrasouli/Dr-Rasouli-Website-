import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes, preloadRoute, ROUTES, NOT_FOUND_ROUTE } from './App';

export { ROUTES, NOT_FOUND_ROUTE };

export async function render(url: string): Promise<string> {
  await preloadRoute(url);
  return renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
}
