// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Container = styled.div`margin-bottom: 2rem;`;

const Image = styled.img`
  background: #eee;
  width: 24rem;
  margin-bottom: 1rem;
  ${Media.fromWidth('XL').css`
    width: 20rem;
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
  ${Media.fromWidth('XL').css`
    p {
      font-size: 1.125rem;
    }
    padding: 0 2rem;
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
