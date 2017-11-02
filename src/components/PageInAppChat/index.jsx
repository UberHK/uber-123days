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

const PageInAppChat = () => (
  <PagePost
    back="#inapp-chat"
    title="App 內訊息功能"
    introduction="接載外國乘客時無法致電外國電話號碼？現在透過司機夥伴 App 即可免費傳送訊息與乘客直接溝通，前往接載他們時自然更容易更準確。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/inapp-chat.png')} />
        <Paragraph>
          訊息功能更可省掉短訊附加費，令司機夥伴賺得更多！接受行程後，選擇聯絡乘客的選項。如果乘客已啟用即時對話功能，你就可以與他們輕鬆對話。
        </Paragraph>
        <h3>如何操作</h3>
        <ul>
          <Li>在聯絡頁面按「訊息」圖示。</Li>
          <Li>填寫訊息然後按「發送」，乘客就會立即收到有關訊息。</Li>
          <Li>如果乘客回覆訊息，你亦同樣可隨時在App內查看訊息。</Li>
        </ul>
        <img style={{ width: 320 }} src={require('./images/screenshot.gif')} />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/share-trip"
          bg={require('../PageHome/images/trip-sharing.png')}
        >
          行程分享功能
        </SuggestedPage>
        <SuggestedPage
          to="/trip-preference"
          bg={require('../PageHome/images/trip-pref.png')}
        >
          自選兩邊單
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageInAppChat;
