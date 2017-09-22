// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import SVGArrow from '../SVGArrow';

const CTAButtonContainer = styled.a`
  display: block;
  margin: 2rem;
  padding: 2rem;
  text-decoration: none;
  background-color: #ea4444;
  &:hover {
    background-color: #c94949;
    svg {
      transform: translateX(0.5rem);
    }
  }
  position: relative;
  bottom: -27rem;
  width: 8rem;
  height: 3.5rem;
  @media (max-width: 24.125rem) {
    bottom: -29rem;
  }
  @media (max-width: 22rem) {
    bottom: -32rem;
  }
  ${Media.fromWidth('XS').css`
    bottom: -27rem;
  `};
  ${Media.fromWidth('SM').css`
    bottom: -21rem;
  `};
  ${Media.fromWidth('MD').css`
    position: relative;
    top: -8rem;
    width: 8rem;
    height: 8rem;
  `};
  ${Media.fromWidth('XL').css`
    top: -10rem;
  `};
`;

const CTATitle = styled.span`
  font-size: 1.5rem;
  color: #fff;
`;

const CTAButton = styled.span`
  position: absolute;
  color: #fff;
  text-align: right;
  bottom: 2rem;
  right: 2rem;
`;

const SVGArrowCTA = styled(SVGArrow)`margin-left: 0.5rem;`;

const CTA = () => (
  <CTAButtonContainer href="https://www.uber.com/signup/drive/">
    <CTATitle>立即加入</CTATitle>
    <CTAButton>
      成為司機夥伴
      <SVGArrowCTA color="#fff" />
    </CTAButton>
  </CTAButtonContainer>
);

export default CTA;
