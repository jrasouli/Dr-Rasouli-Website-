import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Media from './pages/Media';
import Statement from './pages/Statement';
import Credentials from './pages/Credentials';
import GlobalWork from './pages/GlobalWork';
import News from './pages/News';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;