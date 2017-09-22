// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Title = styled.h1`
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1.5rem 0 1rem;
  ${Media.fromWidth('SM').css`
    font-size: 1.75rem;
  `};
  ${Media.fromWidth('MD').css`
    font-size: 2rem;
  `};
  ${Media.fromWidth('LG').css`
    font-size: 2.25rem;
  `};
`;

export default Title;
