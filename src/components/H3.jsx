// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
  ${Media.fromWidth('MD').css`
    font-size: 1.75rem;
  `};
`;

export default H3;
