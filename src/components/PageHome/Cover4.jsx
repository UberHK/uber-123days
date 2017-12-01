// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import Container from '../../components/Container';

const CoverContainer = styled.div`
  position: relative;
  background-color: #e8dbc4;
  background-image: url(${require('./images/bg-4.png')});
  background-size: 1440px;
  background-repeat: no-repeat;
  background-position: center bottom;
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
  position: absolute;
  display: block;
  width: 12rem;
  top: 9rem;
  left: 45%;
  ${Media.fromWidth('SM').css`
    width: 18rem;
    top: 9rem;
    left: 16rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 23rem;
    top: 8rem;
    left: 18rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 30rem;
    top: 8rem;
    left: 25rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 34rem;
    top: 8rem;
    left: 32rem;
  `};
`;

const Slogan = styled.img`
  position: absolute;
  display: block;
  width: 90%;
  top: 4rem;
  left: 5%;
  ${Media.fromWidth('SM').css`
    width: 26rem;
    top: 4rem;
    left: 0rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 26rem;
    top: 4rem;
    left: 0rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 32rem;
    top: 8rem;
    left: 0rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 32rem;
    top: 8rem;
    left: 4rem;
  `};
`;

const Cover = () => (
  <CoverContainer>
    <Container>
      <Slogan alt="" src={require('./images/slogan5.png')} />
      <Phoebe src={require('./images/pheobe-4.png')} />
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
