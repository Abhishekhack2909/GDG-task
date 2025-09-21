import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Registration from '../components/Registration';
import Venue from '../components/Venue';

// Page 161558: Full landing combining all sections (existing one-page feel)
const Home161558 = () => {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Venue />
    </>
  );
};
export default Home161558;
