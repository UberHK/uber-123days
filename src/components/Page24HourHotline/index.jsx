// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Page24HourHotline = () => (
  <PagePost
    back="#24-hour-hotline"
    title="24 小時司機夥伴支援熱線"
    introduction="辦公時間外有疑問？歡迎致電24小時司機夥伴支援熱線！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/call.jpg')}>
          <Paragraph>無論你在何時何地，均可致電24小時司機夥伴熱線：5803 2260。 支援內容包括：</Paragraph>
          <ul>
            <li>緊急事故諮詢</li>
            <li>帳戶開通問題</li>
            <li>上線疑難</li>
            <li>優御會油卡申請問題</li>
            <li>行程問題或其他查詢 </li>
          </ul>
        </PrimaryImage>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/min-fare"
          bg={require('../PageHome/images/min-fare.jpg')}
        >
          最低車資上調
        </SuggestedPage>
        <SuggestedPage
          to="/multi-destinations"
          bg={require('../PageHome/images/multi-destinations.jpg')}
        >
          乘客可增設中途站
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default Page24HourHotline;
