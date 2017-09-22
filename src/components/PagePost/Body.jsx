// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import Media from '../../util/MediaUtil';

import OffsetFullWidth from '../../components/OffsetFullWidth';
import Container from '../../components/Container';

const FullWidth = OffsetFullWidth.extend`
  top: -10rem;
  margin-bottom: -10rem;
  ${Media.fromWidth('LG').css`
    top: -8rem;
    margin-bottom: -8rem;
  `};
`;

const Body = ({ children }: { children: React.Element }) => (
  <FullWidth>
    <Container bgColor="#fff" padding="2rem 3rem">
      {children}
    </Container>
  </FullWidth>
);

export default Body;
