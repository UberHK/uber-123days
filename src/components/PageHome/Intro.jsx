// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import OffsetFullWidth from '../../components/OffsetFullWidth';
import Container from '../../components/Container';
import H2 from '../../components/H2';
import P2 from '../../components/P2';

const IntroContainer = styled(Container)`
  padding: 3rem 2rem;
  ${Media.fromWidth('MD').css`
    padding: 3rem 5rem;
  `};
`;

const FullWidth = OffsetFullWidth.extend`
  top: -4rem;
  margin-bottom: 0;
  ${Media.fromWidth('MD').css`
    top: -6rem;
    margin-bottom: -6rem;
  `};
`;

const Intro = () => (
  <FullWidth>
    <IntroContainer bgColor="#fff">
      <H2>一個全新的開始</H2>
      <P2>
        上月開始，Uber 為司機夥伴作出「123日改變」，感謝大家對第一期的支持和鼓勵，並親臨全新 Uber
        服務中心分享駕駛體驗，讓我們為你做得更好。
      </P2>
      <P2>
        第二期，我們將提供更多駕駛優惠及獎勵，包括 Shell
        油咭優惠的震撼升級、機場前往市區補貼、優御會的豐富禮品及精彩活動等。你只需安心享受駕駛時刻，我們會全力為你作出貼心支援及更多改善。
      </P2>
    </IntroContainer>
  </FullWidth>
);

export default Intro;
