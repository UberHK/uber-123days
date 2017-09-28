// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Container = styled.div`margin-bottom: 3rem;`;

const Image = styled.img`
  background: #eee;
  width: 24rem;
  margin-bottom: 1rem;
  ${Media.fromWidth('LG').css`
    width: 16rem;
    position: relative;
    left: 29.5rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 20rem;
    left: 43.5rem;
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
  ${Media.fromWidth('LG').css`
    position: relative;
    left: -16rem;
    padding: 0;
    padding-right: 1rem;
    width: 29.5rem;
    p {
      font-size: 1.125rem;
    }
  `};
  ${Media.fromWidth('XL').css`
    left: -20rem;
    padding-right: 2rem;
    width: 43.5rem;
  `};
`;

const NormalImage = ({ src, children }: { src: string, children: string }) => (
  <Container>
    <Image src={src} />
    <Description>{children}</Description>
  </Container>
);

export default NormalImage;
