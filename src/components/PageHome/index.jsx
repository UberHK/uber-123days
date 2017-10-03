// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Cover from './Cover2';
import Intro from './Intro';
import Stage from './Stage';

const Div = styled.div`
  line-height: 0;
  font-size: 0;
`;

const HomePage = () => (
  <Div>
    <Cover />
    <Intro />
    <Stage />
  </Div>
);

export default HomePage;
