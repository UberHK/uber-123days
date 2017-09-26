// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

if (process.env.NODE_ENV !== 'production') {
  require('../styles/fonts.css');
  require('../styles/index.css');
}

const Frame = styled.div`
  text-align: center;
  background-color: #111;
`;

const PageContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 90rem;
  width: 100%;
  background: #f8f8f9;
`;

const TemplateWrapper = ({ children }: { children: React.Element }) => (
  <Frame>
    <Helmet />
    <PageContainer>
      <Header />
      {children()}
      <Footer />
    </PageContainer>
  </Frame>
);

export default TemplateWrapper;
