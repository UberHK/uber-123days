// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const P2 = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.75;
  ${Media.fromWidth('MD').css`
    font-size: 1.125rem;
  `};
`;

export default P2;
