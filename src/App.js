import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Shared layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Section components (used directly in home route)
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';

// Page variants mapped to provided IDs
import Home161558 from './pages/Home161558';
import Platform161617 from './pages/Platform161617';
import Pricing161631 from './pages/Pricing161631';
import Company161655 from './pages/Company161655';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-white text-2xl font-display font-semibold animate-pulse">Loading Epic Event...</h2>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main landing page uses explicit sections plus new testimonial & CTA components */}
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <About />
                <Speakers />
                <Schedule />
                <Registration />
                <Venue />
                <Testimonials />
                <CtaBanner />
              </>
            )}
          />
          {/* Numbered page variants */}
          <Route path="/161558" element={<Home161558 />} />
            <Route path="/161617" element={<Platform161617 />} />
            <Route path="/161631" element={<Pricing161631 />} />
            <Route path="/161655" element={<Company161655 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;