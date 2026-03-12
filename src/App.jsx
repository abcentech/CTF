import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Governance from './pages/Governance';
import Impact from './pages/Impact';

function App() {
  return (
    <Router basename="/CTF/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
