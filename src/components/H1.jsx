// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
  ${Media.fromWidth('MD').css`
    font-size: 2.5rem;
  `};
`;

export default H1;
