import React, { useEffect } from 'react';

import Footer from './footer';
import Header from './header';
import Section from './sections';

import s0 from '../../assets/landingpage/서울0.jpg';

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1">
      <Header />

      <div className="relative">
        <img
          src={s0}
          alt="서울 0"
          className="fixed z-0 h-full w-full bg-cover bg-center object-cover opacity-80"
        />
        <Section />
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
