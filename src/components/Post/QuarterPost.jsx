// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import Media from '../../util/MediaUtil';
import PostContainer from './PostContainer';
import Image from './Image';
import Content from './Content';

const Container = PostContainer.extend`
  margin-bottom: 1rem;
  ${Media.fromWidth('MD').css`
    width: 18.375rem;
    height: 21.5rem;
    margin-right: 0.75rem;
    &:nth-of-type(5n) {
      margin-right: 0;
    }
    &:nth-of-type(6n) {
      margin-right: 0.75rem;
    }
    &:nth-of-type(7n) {
      margin-right: 0;
    }
  `};
  ${Media.fromWidth('LG').css`
    width: 24.375rem;
    height: 20rem;
  `};
  ${Media.fromWidth('XL').css`
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    &:nth-of-type(5n) {
      margin-right: 0.75rem;
    }
    &:nth-of-type(6n) {
      margin-right: 0.75rem;
    }
    &:nth-of-type(7n) {
      margin-right: 0;
    }
    width: 16.3125rem;
    height: 25rem;
  `};
`;

const PostImage = Image.extend`
  ${Media.fromWidth('MD').css`
    height: 10.5rem;
  `};
  ${Media.fromWidth('LG').css`
    height: 10rem;
  `};
  ${Media.fromWidth('XL').css`
    height: 12rem;
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

const RegularPost = ({ id, imgUrl, title, desc1, desc2, to }: Props) => (
  <Container id={id} to={to}>
    <PostImage url={imgUrl} />
    <Content title={title} desc1={desc1} desc2={desc2} shortenSize="XL" />
  </Container>
);

export default RegularPost;
