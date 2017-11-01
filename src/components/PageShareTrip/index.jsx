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

const A = styled.a`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageShareTrip = () => (
  <PagePost
    back="#share-trip"
    title="行程分享功能"
    introduction="全新行程分享功能讓你直接透過 App 與親友分享位置及行程狀態，讓摯愛時刻緊貼你的動向。你可以隨時開啟或停用此功能。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/share-trip.png')} />
        <h3>簡單步驟開啟行程分享功能</h3>
        <Paragraph style={{ marginBottom: 0 }}>
          在 App 中前往 [帳戶] &gt; [設定] &gt; [分享我的行程]。
        </Paragraph>
        <Paragraph>上線後，輕按左上角的分享圖示，即可開始分享行程。</Paragraph>
        <div>
          <Col3>
            <img src={require('./images/share_1.png')} />
          </Col3>
          <Col3>
            <img src={require('./images/share_2.png')} />
          </Col3>
          <Col3>
            <img src={require('./images/share_3.png')} />
          </Col3>
        </div>
        <Paragraph>
          分享行程後，對方會看到你在地圖上的即時位置、行程狀態，以及你的姓名、電話號碼及車牌號碼等其他詳細資料，但不會看到乘客的行程路線或個人資料。如果希望暫停分享，只需輕按
          [停止分享] 即可。
        </Paragraph>
        <Paragraph>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="http://t.uber.com/hkds"
          >
            了解更多
          </A>
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/trip-preference"
          bg={require('../PageHome/images/trip-pref.png')}
        >
          自選兩邊單
        </SuggestedPage>
        <SuggestedPage to="/venue" bg={require('../PageHome/images/venue.png')}>
          建議上車點
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageShareTrip;
