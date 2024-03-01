import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import {
  // Header,
  // Intro,
  // About,
  // Contact,
  // Education,
  // Project,
  // Chat,
  Home,
  Live,
  Msg,
  NewProject,
} from './components';
import Admin from './admin/Admin';

const App = () => {
  return (
    // <div>
    //   <Header />
    //   <Intro />
    //   <About />
    //   <Contact />
    //   <Education />
    //   <Chat />
    //   <Project />
    // </div>
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/live" exact Component={Live} />
        <Route path="/live-chat" exact Component={Msg} />
        <Route path="/new-proj" exact Component={NewProject} />
        <Route path="/administer" exact Component={Admin} />
      </Routes>
    </Router>
  );
};

export default App;
