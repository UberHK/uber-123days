// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Introduction = styled.p`
  line-height: 1.5;
  font-size: 1.25rem;
  ${Media.fromWidth('MD').css`
    font-size: 1.5rem;
  `};
`;

export default Introduction;
