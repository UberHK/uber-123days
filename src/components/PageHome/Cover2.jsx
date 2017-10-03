// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import Container from '../../components/Container';

const CoverContainer = styled.div`
  position: relative;
  background: url(${require('./images/bg2.svg')});
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 26rem;
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
  width: 15rem;
  margin-top: -11rem;
  margin-left: 10rem;
  ${Media.fromWidth('SM').css`
    margin-top: 0rem;
    margin-left: 0;
    width: 16rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 18.5rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 22rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 24rem;
  `};
`;

const Slogan = styled.img`
  width: 14rem;
  ${Media.fromWidth('SM').css`
    position: absolute;
    width: 14rem;
    top: 4rem;
    right: 0;
  `};
  ${Media.fromWidth('MD').css`
    width: 14rem;
    top: 6rem;
    right: 0;
  `};
  ${Media.fromWidth('LG').css`
    width: 16rem;
    top: 6rem;
    right: 0;
  `};
  ${Media.fromWidth('XL').css`
    width: 18rem;
    top: 4rem;
    right: 2rem;
  `};
`;

const Deco = styled.img`
  width: 16rem;
  ${Media.fromWidth('SM').css`
    position: absolute;
    width: 8rem;
    top: 6rem;
    left: 4rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 10rem;
    top: 5rem;
    left: 4rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 14rem;
    top: 8rem;
    left: 4rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 16rem;
    top: 6rem;
    left: 8rem;
  `};
`;

const Slogan2 = styled.img`
  position: absolute;
  width: 10rem;
  top: 12rem;
  left: 1rem;
  ${Media.fromWidth('SM').css`
    width: 10rem;
    top: auto;
    bottom: 4rem;
    left: 0;
  `};
  ${Media.fromWidth('MD').css`
    width: 12rem;
    bottom: 7rem;
    left: 0;
  `};
  ${Media.fromWidth('LG').css`
    width: 15rem;
    bottom: 4rem;
    left: 0;
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
      <Deco alt="" src={require('./images/deco2.png')} />
      <Slogan2 alt="" src={require('./images/slogan2-2.png')} />
      <center>
        <Phoebe alt="" src={require('./images/phoebe2.png')} />
      </center>
      <Slogan alt="" src={require('./images/slogan2.png')} />
    </Container>
  </CoverContainer>
);

export default Cover;
