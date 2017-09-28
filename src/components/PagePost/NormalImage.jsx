// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Container = styled.div`margin-bottom: 3rem;`;

const Image = styled.img`
  background: #eee;
  width: 100%;
  margin-bottom: 1rem;
  ${Media.fromWidth('SM').css`
    width: 24rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 20rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 26rem;
  `};
`;

const Description = styled.div`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  padding: 0 0.5rem;
  line-height: 1.5;
  h4 {
    font-size: 1.25rem;
    margin: 0;
  }
  p {
    font-size: 1.125rem;
  }
  ${Media.fromWidth('LG').css`
    padding: 0;
    padding-left: 1.5rem;
    width: 25.5rem;
    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `};
  ${Media.fromWidth('XL').css`
    padding-top: 1rem;
    padding-left: 2rem;
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
    <Image src={src} />
    <Description>{children}</Description>
  </Container>
);

export default NormalImage;
