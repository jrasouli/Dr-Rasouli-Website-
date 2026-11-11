import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { lazyPage } from './lib/lazyPage';

const Home = lazyPage(() => import('./pages/Home'));
const About = lazyPage(() => import('./pages/About'));
const Services = lazyPage(() => import('./pages/Services'));
const Media = lazyPage(() => import('./pages/Media'));
const Statement = lazyPage(() => import('./pages/Statement'));
const Credentials = lazyPage(() => import('./pages/Credentials'));
const GlobalWork = lazyPage(() => import('./pages/GlobalWork'));
const News = lazyPage(() => import('./pages/News'));
const PhilosophyLanding = lazyPage(() => import('./pages/philosophy/Landing'));
const CervicalStenosis = lazyPage(() => import('./pages/philosophy/CervicalStenosis'));
const LumbarStenosis = lazyPage(() => import('./pages/philosophy/LumbarStenosis'));
const HerniatedDisc = lazyPage(() => import('./pages/philosophy/HerniatedDisc'));
const FusionVsDisc = lazyPage(() => import('./pages/philosophy/FusionVsDisc'));
const SpinalDeformity = lazyPage(() => import('./pages/philosophy/SpinalDeformity'));
const CompressionFractures = lazyPage(() => import('./pages/philosophy/CompressionFractures'));
const NotFound = lazyPage(() => import('./pages/NotFound'));

const PAGES: { path: string; page: React.ComponentType & { preload: () => Promise<void> } }[] = [
  { path: '/', page: Home },
  { path: '/about', page: About },
  { path: '/statement', page: Statement },
  { path: '/credentials', page: Credentials },
  { path: '/global-work', page: GlobalWork },
  { path: '/news', page: News },
  { path: '/services', page: Services },
  { path: '/media', page: Media },
  { path: '/philosophy', page: PhilosophyLanding },
  { path: '/philosophy/cervical-stenosis', page: CervicalStenosis },
  { path: '/philosophy/lumbar-stenosis', page: LumbarStenosis },
  { path: '/philosophy/herniated-disc', page: HerniatedDisc },
  { path: '/philosophy/fusion-vs-disc-replacement', page: FusionVsDisc },
  { path: '/philosophy/spinal-deformity', page: SpinalDeformity },
  { path: '/philosophy/compression-fractures', page: CompressionFractures },
];

// Every route listed here is pre-rendered to static HTML at build time (see scripts/prerender.mjs).
export const ROUTES = PAGES.map((page) => page.path);

// Rendered to dist/404.html, which Vercel serves with HTTP 404 for any unmatched URL.
export const NOT_FOUND_ROUTE = '/404';

/** Load the chunk for this path before render so prerender and hydration stay in sync. */
export function preloadRoute(pathname: string): Promise<void> {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const match = PAGES.find((page) => page.path === path);
  return (match ? match.page : NotFound).preload();
}

export const AppRoutes: React.FC = () => (
  <Layout>
    <Suspense fallback={<div className="min-h-[50vh]" aria-hidden="true" />}>
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
        <Route path="/philosophy/compression-fractures" element={<CompressionFractures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
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
