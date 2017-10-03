// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const PageAirport = () => (
  <PagePost
    back="#airport"
    title="機場前往市區補貼"
    introduction="完成往機場範圍之行程後，即時前往市區接單，將獲 HK$50 補貼。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/airport.png')}>
          <p>我們深知你希望把握每一分、每一秒在行程途中，增加行程收入。有時候在機場範圍等候時間較長，司機夥伴可考慮前往市區接單。</p>
          <p>由即日起至12月31日，在上午五時至下午六時期間完成往機場範圍之行程後，即時前往市區接單，將額外獲得 HK$50 作為補貼。</p>
        </PrimaryImage>
        <p>* 機場前往市區補貼在指定時間生效時，司機夥伴會收到 app 內訊息提示。</p>
        <br />
        <br />
        <br />
        <h3>計劃詳情：</h3>
        <ul>
          <Li>司機夥伴需在機場排隊區完成行程後60分鐘內，成功在排隊區域以外地區接單並完成該行程（不計在60分鐘內）。</Li>
          <Li>每次由機場空車出市區的行程均可獲得最多一次補貼，補貼適用時間以排隊區完成行程一刻為準。</Li>
          <Li>補貼將與行程收入在下星期一併匯款。</Li>
          <Li>機場前往市區補貼在指定時間生效時，司機夥伴會收到 SMS 訊息提示。</Li>
          <Li>計劃只限直接從 Uber 收到 SMS 訊息的司機夥伴參與。</Li>
        </ul>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/lost-and-found"
          bg={require('../PageHome/images/lost_and_found.png')}
        >
          路不拾遺獎勵計劃
        </SuggestedPage>
        <SuggestedPage
          to="/oct-event"
          bg={require('../PageHome/images/oct-event.png')}
        >
          特別活動
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageAirport;
