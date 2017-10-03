// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const PageLostAndFound = () => (
  <PagePost
    back="#lost-and-found"
    title="乘客失物處理「路不拾遺獎勵計劃」"
    introduction="由即日起至12月31日，只要乘客親身到 Uber
    服務中心取回你所交還的物品，我們將會給你 HK$100 獎勵，作為答謝。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/lost_and_found.png')}>
          <p>假如乘客在車上遺留私人物品，你可以直接聯絡乘客安排交還物品。</p>
          <p>除此之外，你亦可以將物品送到 Uber 服務中心，我們會代你聯絡乘客取回物品，節省你和乘客相約的時間。</p>
        </PrimaryImage>
        <Paragraph>
          <p>與此同時，你亦可在乘客下車前，提醒他們檢查有否帶齊所有隨身物品！感謝你一直以來為乘客提供五星的行程體驗。</p>
          <h3 style={{ marginTop: '4rem' }}>計劃詳情</h3>
          <ol>
            <Li>路不拾遺獎勵試行計劃適用於2017年10月3日至12月31日期間完成的行程。</Li>
            <Li>
              乘客只要在2017年12月31日前到 Uber 服務中心取回物件，司機夥伴便會在一星期内收到 HK$100 的路不拾遺獎勵。
            </Li>
            <Li>Uber 服務中心並不能代司機夥伴處理任何食物、現金、信用卡、有害物品、武器、藥物及其他非法物品。</Li>
          </ol>
        </Paragraph>
        <Paragraph>
          <h3>【冷知識】10 項最常被遺留在共乘行程的物件</h3>
          <PrimaryImage src={require('./images/10-most-forgotten-items.png')} />
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/oct-event"
          bg={require('../PageHome/images/oct-event.png')}
        >
          特別活動
        </SuggestedPage>
        <SuggestedPage
          to="/fuel-card"
          bg={require('../PageHome/images/fuel-card.png')}
        >
          Shell 油咭優惠升級
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageLostAndFound;
