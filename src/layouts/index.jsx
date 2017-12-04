// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

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

setTimeout(() => {
  toast(
    <a
      style={{ textDecoration: 'none', color: '#fff' }}
      target="_blank"
      href="http://t.uber.com/hkfb"
      rel="noopener noreferrer"
    >
      想知道更多？請即瀏覽我們的 Facebook 司機夥伴專頁。
    </a>,
    {
      position: toast.POSITION.TOP_RIGHT
    }
  );
}, 3000);

const TemplateWrapper = ({ children }: { children: React.Element }) => (
  <Frame>
    <Helmet />
    <PageContainer>
      <Header />
      {children()}
      <Footer />
    </PageContainer>
    <ToastContainer
      toastClassName="toast"
      closeOnClick={false}
      autoClose={false}
    />
  </Frame>
);

export default TemplateWrapper;
