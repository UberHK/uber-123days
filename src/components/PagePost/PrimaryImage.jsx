// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Container = styled.div``;

const Half = styled.img`
  width: 100%;
  ${Media.fromWidth('XL').css`
    width: 40rem;
  `};
`;

const Image = Half.extend`
  background: #eee;
  margin-bottom: 1rem;
`;

const Description = Half.withComponent('div').extend`
  display: inline-block;
  box-sizing : border-box;
  vertical-align: top;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  line-height: 1.5;
  ${Media.fromWidth('XL').css`
    padding: 0 2rem;
    width: 23.5rem;
  `};
`;

const PrimaryImage = ({ src, children }: { src: string, children: string }) => (
  <Container>
    <Image src={src} />
    <Description>{children}</Description>
  </Container>
);

export default PrimaryImage;
