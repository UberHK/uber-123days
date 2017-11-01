// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Link from 'gatsby-link';

import Media from '../../util/MediaUtil';

const PostContainer = styled(Link)`
  text-decoration: none;
  color: #000;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 20rem;
  margin-bottom: 0.75rem;
  background: #fff;
  overflow: hidden;
  box-shadow: none;
  transition: box-shadow 0.5s;
  &:hover {
    color: #333;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
    svg {
      transform: translateX(0.25rem);
    }
  }
  ${Media.fromWidth('XS').css`
    height: 20rem;
  `};
  ${Media.fromWidth('SM').css`
    height: 24rem;
  `};
`;

export default PostContainer;
