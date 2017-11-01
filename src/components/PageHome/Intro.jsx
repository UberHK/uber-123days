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
      <H2>Uber 為你帶來更貼心改變</H2>
      <P2>
        隨著「123日改變」踏入第三期，我們在司機夥伴 App
        作出了一系列更新，包括讓你可以自由選擇接單種類、系統自動建議乘客到更方便你接載的地點上車、App
        內免費訊息功能及行程分享功能。而大受司機夥伴們歡迎的精彩活動及
        Uber「每月之星」頒獎聚會將會繼續舉行，亦會舉辦汽車保養日，讓你的座駕保持最佳狀態。我們不斷進步，只為你能輕鬆享受每一個行程。
      </P2>
    </IntroContainer>
  </FullWidth>
);

export default Intro;
