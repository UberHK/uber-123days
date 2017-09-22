// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Link from 'gatsby-link';

import Media from '../../util/MediaUtil';
import SVGArrow from '../SVGArrow';

const SuggestedPage = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 10rem;
  color: #fff;
  background: #e8e8e9 url(${props => props.bg}) no-repeat center center;
  background-size: cover;
  text-decoration: none;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  &:nth-of-type(2n) {
    margin-right: 0;
  }
  ${Media.fromWidth('SM').css`
    height: 12rem;
  `};
  ${Media.fromWidth('MD').css`
    height: 15rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 22.5rem;
    height: 13rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 31.5rem;
    height: 15rem;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 1.5rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PageGlh = ({
  to,
  bg,
  children
}: {
  to: string,
  bg: string,
  children: React.Element
}) => (
  <SuggestedPage to={to} bg={bg}>
    <Content>
      {children} <SVGArrow color="#fff" />
    </Content>
  </SuggestedPage>
);

export default PageGlh;
