import React from 'react';
import {
  Header,
  Intro,
  About,
  Contact,
  Education,
  Footer,
  Skills,
  //   Chat,
  //   Home,
  //   Live,
  //   Msg,
  //   NewProject,
} from '../components';
import Projects from './project/Projects';

const Admin = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Education />
      <Footer />
    </div>
  );
};

export default Admin;
