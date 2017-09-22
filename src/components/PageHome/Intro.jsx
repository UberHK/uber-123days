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
      <P2>多謝各位司機夥伴一直積極與 Uber 香港團隊分享自己在平台上的駕駛體驗，你的意見和建議對 Uber 來說十分寶貴。</P2>
      <P2>
        由本月起我們將會因應你的實際需求，作出「123日改變」。計劃將會分三階段實行，而第一階段已經正式啟動。從提高每位司機夥伴的行程收入，到提供更全面及貼心的支援服務，我們都會逐步作出改善，讓你安心享受駕駛時刻。
      </P2>
    </IntroContainer>
  </FullWidth>
);

export default Intro;
