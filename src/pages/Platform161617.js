import React from 'react';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';

// Page 161617: Focused on features & pricing (reuse About->features, Speakers->capabilities, Schedule->pricing)
const Platform161617 = () => {
  return (
    <>
      <About />
      <Speakers />
      <Schedule />
    </>
  );
};
export default Platform161617;
