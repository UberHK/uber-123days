// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const Image = styled.div`
  height: 10rem;
  position: relative;
  background: #e8e8e9 url(${props => props.url}) no-repeat center center;
  background-size: cover;
  ${Media.fromWidth('SM').css`
    height: 14.25rem;
  `};
`;

export default Image;
