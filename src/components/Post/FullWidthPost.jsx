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
  ${Media.fromWidth('MD').css`
    height: 16rem;
  `};
  ${Media.fromWidth('LG').css`
    height: 18rem;
  `};
  ${Media.fromWidth('XL').css`
    height: 22rem;
  `};
`;

const PostImage = Image.extend`
  background-position: top center;
  ${Media.fromWidth('MD').css`
    float: left;
    height: 100%;
    width: 63%;
  `};
  ${Media.fromWidth('LG').css`
    width: 67%;
  `};
`;

const PostContent = styled(Content)`
  ${Media.fromWidth('MD').css`
    float: left;
    height: 100%;
    width: 37%;
    padding: 2rem 1.5rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 33%;
  `};
`;

type Props = {
  id: string,
  imgUrl: string,
  title: string,
  desc1: string,
  desc2: string,
  to: string
};

const FullWidthPost = ({ id, imgUrl, title, desc1, desc2, to }: Props) => (
  <Container id={id} to={to}>
    <PostImage url={imgUrl} />
    <PostContent title={title} desc1={desc1} desc2={desc2} />
  </Container>
);

export default FullWidthPost;
