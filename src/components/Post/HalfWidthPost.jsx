// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import PostContainer from './PostContainer';
import Image from './Image';
import Content from './Content';

const Container = PostContainer.extend`
  margin-bottom: 1rem;
  ${Media.fromWidth('MD').css`
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    margin-right: 0.75rem;
    width: 18.375rem;
    height: 21.5rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 24.375rem;
    height: 24rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 33.375rem;
  `};
`;

const PostImage = styled(Image)`
  ${Media.fromWidth('MD').css`
    height: 10rem;
  `};
  ${Media.fromWidth('LG').css`
    height: 11.5rem;
  `};
  ${Media.fromWidth('LG').css`
    height: 14rem;
  `};
`;

const PostContent = styled(Content)``;

type Props = {
  id: string,
  imgUrl: string,
  title: string,
  desc1: string,
  desc2: string,
  to: string
};

const HalfWidthPost = ({ id, imgUrl, title, desc1, desc2, to }: Props) => (
  <Container id={id} to={to}>
    <PostImage url={imgUrl} />
    <PostContent title={title} desc1={desc1} desc2={desc2} shortenSize="XL" />
  </Container>
);

export default HalfWidthPost;
