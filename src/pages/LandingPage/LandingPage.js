import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        {/*<BrowserNotes />*/}
        <div className="intro-wrapper">
          <div className="intro-name"><span className="highlight">Hello, I'm Vutsal!</span></div>
          <div className="tagline">
            Software Engineer | &#123; DevOps, Data Science, Blockchain &#125; Enthusiast
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
