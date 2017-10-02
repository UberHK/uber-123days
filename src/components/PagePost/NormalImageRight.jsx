// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import ReactPlayer from 'react-player';

// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Container = styled.div`margin-bottom: 3rem;`;

const PlayerContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
  ${Media.fromWidth('SM').css`
    width: 24rem;
    height: 24rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 20rem;
    height: 20rem;
    position: relative;
    left: 25.5rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 26rem;
    height: 26rem;
    left: 37.5rem;
  `};
`;

const Description = styled.div`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  line-height: 1.5;
  h4 {
    margin: 0;
  }
  p {
    font-size: 1.125rem;
  }
  ${Media.fromWidth('LG').css`
    position: relative;
    left: -20rem;
    padding: 0;
    padding-right: 1rem;
    width: 25.5rem;
    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `};
  ${Media.fromWidth('XL').css`
    padding-top: 1rem;
    left: -26rem;
    padding-right: 2rem;
    width: 37.5rem;
    p {
      font-size: 1.125rem;
      margin-top: 1rem;
      margin-bottom: 1.25rem;
    }
  `};
`;

const NormalImage = ({ src, children }: { src: string, children: string }) => (
  <Container>
    <PlayerContainer>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=1JUYgd3Vxzc"
      />
    </PlayerContainer>
    <Description>{children}</Description>
  </Container>
);

export default NormalImage;
