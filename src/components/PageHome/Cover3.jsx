// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import Container from '../../components/Container';

const CoverContainer = styled.div`
  position: relative;
  background-color: #7ac9a7;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  overflow: hidden;
  width: 100%;
  height: 22rem;
  ${Media.fromWidth('SM').css`
    height: 27rem;
  `};
  ${Media.fromWidth('MD').css`
    height: 32rem;
  `};
  ${Media.fromWidth('LG').css`
    height: 38rem;
  `};
  ${Media.fromWidth('XL').css`
    height: 40rem;
  `};
`;

const Phoebe = styled.img`
  width: 100%;
  ${Media.fromWidth('SM').css`
    width: 92.5%;
  `};
  ${Media.fromWidth('MD').css`
    width: 90%;
  `};
  ${Media.fromWidth('LG').css`
    width: 85%;
  `};
  ${Media.fromWidth('XL').css`
    width: 67.5%;
  `};
`;

const Slogan = styled.img`
  position: absolute;
  display: none;
  ${Media.fromWidth('SM').css`
    display: block;
    width: 14rem;
    top: 6rem;
    left: 8rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 16rem;
    top: 5rem;
    left: 8rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 21rem;
    top: 6rem;
    left: 10rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 26rem;
    top: 4rem;
    left: 14rem;
  `};
`;

const Slogan2 = styled.img`
  position: absolute;
  width: 12rem;
  top: 10rem;
  left: 2rem;
  ${Media.fromWidth('SM').css`
    width: 12rem;
    top: auto;
    bottom: 2rem;
    left: 2rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 14rem;
    bottom: 3rem;
    left: 2rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 16rem;
    bottom: 4rem;
    left: 2rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 18rem;
    bottom: 4rem;
    left: 3rem;
  `};
`;

const Cover = () => (
  <CoverContainer>
    <Container>
      <Slogan alt="" src={require('./images/slogan3.png')} />
      <Slogan2 alt="" src={require('./images/slogan4.png')} />
      <div style={{ textAlign: 'right' }}>
        <Phoebe src={require('./images/cover3.png')} />
      </div>
      {/* <Deco alt="" src={require('./images/deco2.png')} />
      <Slogan2 alt="" src={require('./images/slogan2-2.png')} />
      <center>
        <Phoebe alt="" src={require('./images/phoebe2.png')} />
      </center>
      <Slogan alt="" src={require('./images/slogan2.png')} /> */}
    </Container>
  </CoverContainer>
);

export default Cover;
