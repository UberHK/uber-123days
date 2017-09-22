// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${Media.fromWidth('MD').css`
    font-size: 1.75rem;
  `};
`;

export default H2;
