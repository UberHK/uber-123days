// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Link from 'gatsby-link';

import Media from '../../util/MediaUtil';
import Container from '../Container';
import SVGLogo from '../SVGLogo';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const LogoContainer = styled(Link)`
  float: left;
  display: block;
  text-decoration: none;
  margin: 2rem;
  width: 6rem;
  height: 6rem;
  ${Media.fromWidth('LG').css`
    width: 8rem;
    height: 8rem;
  `};
`;

const Header = () =>
  <Wrapper>
    <Container>
      <LogoContainer to="/">
        <SVGLogo />
      </LogoContainer>
    </Container>
  </Wrapper>;

export default Header;
