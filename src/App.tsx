import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Approach from './pages/Approach';
import Economics from './pages/Economics';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/execution" element={<Navigate to="/approach" replace />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
