import React from 'react';
import {
  Header,
  Intro,
  About,
  Contact,
  Education,
  Project,
  // Chat,
  Skills,
  Footer,
} from './index.js';

const Home = ({ id, title, link, description }) => {
  return (
    <div>
      <Header />
      <Intro />
      <Project />
      <Skills />
      <About />
      <Contact />
      <Education />
      <Footer />
    </div>
  );
};

export default Home;
