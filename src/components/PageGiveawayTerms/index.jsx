// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const PageGiveawayTerms = () => (
  <PagePost
    back="giveaway"
    title="機場前往市區補貼"
    introduction="完成往機場範圍之行程後，即時前往市區接單，將獲 HK$50 補貼。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <p>
          * 機場前往市區補貼在指定時間生效時，司機夥伴會收到 app 內訊息提示。
        </p>
        <br />
        <br />
        <br />
        <h3>計劃詳情：</h3>
        <ul>
          <Li>
            司機夥伴需在機場排隊區完成行程後60分鐘內，成功在排隊區域以外地區接單並完成該行程（不計在60分鐘內）。
          </Li>
          <Li>
            每次由機場空車出市區的行程均可獲得最多一次補貼，補貼適用時間以排隊區完成行程一刻為準。
          </Li>
          <Li>補貼將與行程收入在下星期一併匯款。</Li>
          <Li>
            機場前往市區補貼在指定時間生效時，司機夥伴會收到 SMS 訊息提示。
          </Li>
          <Li>計劃只限直接從 Uber 收到 SMS 訊息的司機夥伴參與。</Li>
        </ul>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageGiveawayTerms;
