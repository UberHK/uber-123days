// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import SuggestedPage from '../PagePost/SuggestedPage';
import Media from '../../util/MediaUtil';

const Col3 = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  width: 100%;
  padding: 0 0.25rem;
  box-sizing: border-box;
  ${Media.fromWidth('MD').css`
    width: 50%;
  `};
  ${Media.fromWidth('LG').css`
    width: 33.33333%;
  `};
  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const A = styled.a`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageCarCareDay = () => (
  <PagePost
    back="#carcare-day"
    title="Uber x Motor City 汽車試駕及保養日"
    introduction="相信不少司機夥伴都是愛車之人，所以我們特意聯同 Motor City 於11月17日舉行汽車試駕及保養日，由 Motor City 專業人士分享汽車保養知識及慳油貼士，並介紹多款慳油及高性能車輛。出席司機夥伴有機會贏取免費洗車服務及其他精美獎品，讓你的座駕時刻保持最佳狀態。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <div>
          <Col3>
            <img src={require('./images/car_1.jpg')} />
          </Col3>
          <Col3>
            <img src={require('./images/car_2.jpg')} />
          </Col3>
          <Col3>
            <img src={require('./images/car_3.jpg')} />
          </Col3>
        </div>
        <h3>活動詳情</h3>
        <Paragraph style={{ marginBottom: 0 }}>
          日期及時間：11月17日（星期五）下午2時至5時
        </Paragraph>
        <Paragraph style={{ marginBottom: 0 }}>地點：荔枝角（詳細地址將在電郵內發放）</Paragraph>
        <Paragraph style={{ marginBottom: 0 }}>活動內容：</Paragraph>
        <ul>
          <Li>汽車保養、精明駕駛和慳油貼士</Li>
          <Li>介紹買車最新趨勢，如網上bid車</Li>
          <Li>參觀 Motor City 車場和參與試車活動</Li>
          <Li>大抽獎：獎品包括 GoGoWash 免費洗車或洗偈服務及 Uber 精美禮品</Li>
        </ul>
        <Paragraph style={{ marginBottom: 0 }}>
          活動費用全免，誠邀司機夥伴攜同家人、朋友出席！
        </Paragraph>
        <Paragraph>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="http://t.uber.com/novcarday"
          >
            立即報名
          </A>
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthly-star-3.jpg')}
        >
          每月之星
        </SuggestedPage>
        <SuggestedPage
          to="/inapp-chat"
          bg={require('../PageHome/images/inapp-chat.png')}
        >
          App 內訊息功能
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageCarCareDay;
