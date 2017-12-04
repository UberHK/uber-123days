// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Link from 'gatsby-link';

import PagePost from '../PagePost';
import Paragraph from '../PagePost/Paragraph';
import FullWidth from '../FullWidth';
import Container from '../Container';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const PageGiveaway = () => (
  <PagePost
    back="#giveaway"
    title="聖誕新年星級行程大賞"
    introduction="你給乘客的星級行程，換 Uber 送你的星級旅程。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/giveaway2.jpg')} />
        <Paragraph>
          從12月11日至2018年1月1日凌晨，每日完成最多5星行程的司機夥伴即獲價值
          HK$8,000
          的旅行禮券！全月將會有21位司機夥伴得獎，現在就開始你的5星行程吧！
        </Paragraph>
        <h3>計劃詳情</h3>
        <ul>
          <Li>活動當天上午四時至翌日上午四時期間開始的行程。</Li>
          <Li>本活動最終解釋和決定權歸Uber所有。</Li>
        </ul>
        <p>
          * <Link to="/giveaway-terms">條款及細則</Link>
        </p>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/upsidedowntrip"
          bg={require('../PageHome/images/upsidedowntrip.jpg')}
        >
          遠程接單車資保證
        </SuggestedPage>
        <SuggestedPage
          to="/dec-event"
          bg={require('../PageHome/images/dec-event.jpg')}
        >
          特別活動
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageGiveaway;
