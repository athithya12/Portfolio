import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Element } from 'react-scroll';

const About = () => (
  <Element name="ABOUT">
    <div id="ABOUT" style={{ height: '100vh' }}>
      <Toolbar />
      About Container
    </div>
  </Element>
);

export default About;
