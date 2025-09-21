import React from 'react';
import Schedule from '../components/Schedule';
import Registration from '../components/Registration';

// Page 161631: Pricing & signup (reuse Schedule as pricing tiers + Registration as signup form)
const Pricing161631 = () => {
  return (
    <>
      <Schedule />
      <Registration />
    </>
  );
};
export default Pricing161631;
