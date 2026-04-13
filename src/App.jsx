import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Governance from './pages/Governance';
import Impact from './pages/Impact';
import FAQ from './pages/FAQ';
import GetInvolved from './pages/GetInvolved';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showSplash, setShowSplash] = React.useState(() => {
    // Show splash screen only once per session
    const hasSeenSplash = sessionStorage.getItem('ctf_has_seen_splash');
    return !hasSeenSplash;
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('ctf_has_seen_splash', 'true');
    setShowSplash(false);
  };

  return (
    <Router basename="/CTF/">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      
      {!showSplash && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
