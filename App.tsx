import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Media from './pages/Media';
import Statement from './pages/Statement';
import Credentials from './pages/Credentials';
import GlobalWork from './pages/GlobalWork';
import News from './pages/News';

// Every route listed here is pre-rendered to static HTML at build time (see scripts/prerender.mjs).
export const ROUTES = ['/', '/about', '/statement', '/credentials', '/global-work', '/news', '/services', '/media'];

export const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/statement" element={<Statement />} />
      <Route path="/credentials" element={<Credentials />} />
      <Route path="/global-work" element={<GlobalWork />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  </Layout>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
