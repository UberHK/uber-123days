// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Link from 'gatsby-link';

import Media from '../../util/MediaUtil';
import Container from '../Container';
import FullWidth from '../FullWidth';
import Body from './Body';
import SVGArrow from '../SVGArrow';
import Title from '../PagePost/Title';
import Introduction from '../PagePost/Introduction';

const Cover = styled.div`
  width: 100%;
  height: 20rem;
  font-size: 2rem;
  color: #fff;
  background: #146988
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60'%3E%3Cdefs%3E%3Cstyle%3E.c1,.c3%7Bfill:none%7D.c2%7Bfill:%23146988%7D.c3%7Bstroke:%231c8eb4;stroke-miterlimit:10%7D.c4%7Bfill:url%28%23a%29%7D%3C/style%3E%3Cpattern id='a' data-name='teal 2nd background RGB' width='60' height='60' patternTransform='translate%280 30%29' patternUnits='userSpaceOnUse' viewBox='0 0 60 60'%3E%3Cpath class='c1' d='M0 0h60v60H0z'/%3E%3Cpath class='c2' d='M0 0h60v60H0z'/%3E%3Cpath class='c3' d='M25 55v5M60 15h-5v10h5M45 35h15M25 15h20M15 25v30M35 45v15M0 25h35v10H25v10h20V0M25 0v25M5 0v5M5 55v5M0 35h15M0 5h15v10H0M45 60v-5h10V35M35 55H5V35'/%3E%3Cpath class='c3' d='M60 5H35V0'/%3E%3C/pattern%3E%3C/defs%3E%3Cpath class='c4' d='M0 0h240v60H0z'/%3E%3C/svg%3E")
    repeat;
  background-size: 30rem 7.5rem;
`;

const PageSlogan = styled.div`
  padding: 2.25rem 0 0 9.5rem;
  ${Media.fromWidth('SM').css`
    padding: 2.75rem 0 0 9.5rem;
  `};
  ${Media.fromWidth('LG').css`
    padding: 3rem 0 0 12rem;
  `};
`;

const Back = styled(Link)`
  display: block;
  margin: 1rem 0;
  text-decoration: none;
  font-size: 1.125rem;
  color: #555;
  &:hover {
    color: #333;
    svg {
      transform: translateX(-0.5rem);
    }
  }
`;

const H1 = styled.h1`
  margin: 0 0 0.5rem;
  ${Media.fromWidth('LG').css`
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `};
`;

const H2 = styled.h2`
  width: 10rem;
  font-size: 1.125rem;
  font-weight: normal;
  margin: 0;
  ${Media.fromWidth('XS').css`
    width: 14rem;
  `};
  ${Media.fromWidth('SM').css`
    width: 100%;
  `};
  ${Media.fromWidth('LG').css`
    font-size: 1.5rem;
  `};
`;

type Props = {
  back: string,
  title: string,
  introduction: string,
  children: string
};

const PagePost = ({ back, title, introduction, children }: Props) => (
  <div>
    <FullWidth>
      <Cover>
        <Container>
          <PageSlogan>
            <H1>123日改變</H1>
            <H2>承諾進步，時刻為司機夥伴做得更好</H2>
          </PageSlogan>
        </Container>
      </Cover>
    </FullWidth>
    <Body>
      <Back to={`/${back}`}>
        <SVGArrow direction="left" color="#555" /> 返回主頁
      </Back>
      <Title>{title}</Title>
      <Introduction>{introduction}</Introduction>
    </Body>
    {children}
  </div>
);

export default PagePost;
