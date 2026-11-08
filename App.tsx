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
import NotFound from './pages/NotFound';
import PhilosophyLanding from './pages/philosophy/Landing';
import CervicalStenosis from './pages/philosophy/CervicalStenosis';
import LumbarStenosis from './pages/philosophy/LumbarStenosis';
import HerniatedDisc from './pages/philosophy/HerniatedDisc';
import FusionVsDisc from './pages/philosophy/FusionVsDisc';
import SpinalDeformity from './pages/philosophy/SpinalDeformity';

// Every route listed here is pre-rendered to static HTML at build time (see scripts/prerender.mjs).
export const ROUTES = [
  '/',
  '/about',
  '/statement',
  '/credentials',
  '/global-work',
  '/news',
  '/services',
  '/media',
  '/philosophy',
  '/philosophy/cervical-stenosis',
  '/philosophy/lumbar-stenosis',
  '/philosophy/herniated-disc',
  '/philosophy/fusion-vs-disc-replacement',
  '/philosophy/spinal-deformity',
];

// Rendered to dist/404.html, which Vercel serves with HTTP 404 for any unmatched URL.
export const NOT_FOUND_ROUTE = '/404';

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
      <Route path="/philosophy" element={<PhilosophyLanding />} />
      <Route path="/philosophy/cervical-stenosis" element={<CervicalStenosis />} />
      <Route path="/philosophy/lumbar-stenosis" element={<LumbarStenosis />} />
      <Route path="/philosophy/herniated-disc" element={<HerniatedDisc />} />
      <Route path="/philosophy/fusion-vs-disc-replacement" element={<FusionVsDisc />} />
      <Route path="/philosophy/spinal-deformity" element={<SpinalDeformity />} />
      <Route path="*" element={<NotFound />} />
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
