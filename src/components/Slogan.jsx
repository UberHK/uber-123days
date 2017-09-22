// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const SloganContainer = styled.div`
  color: #fff;
  text-align: left;
`;

const Heading = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  ${Media.fromWidth('SM').css`
    font-size: 3rem;
  `};
  ${Media.fromWidth('LG').css`
    margin-bottom: 1rem;
    font-size: 3rem;
  `};
`;

const Desc = styled.div`
  font-size: 1.25rem;
  ${Media.fromWidth('SM').css`
    font-size: 1.5rem;
  `};
  ${Media.fromWidth('LG').css`
    font-size: 2rem;
  `};
`;

const Slogan = ({ className }: { className: string }) =>
  <SloganContainer className={className}>
    <Heading>123日改變</Heading>
    <Desc>承諾進步，時刻為司機夥伴做得更好</Desc>
  </SloganContainer>;

export default Slogan;
