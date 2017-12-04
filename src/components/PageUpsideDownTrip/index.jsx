// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

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

const PageUpsideDownTrip = () => (
  <PagePost
    back="#longtrip-bonus"
    title="遠程接單車資保證"
    introduction="直至2018年1月1日凌晨，當你收到行程預約時，如果到達上車點的時間預計為10分鐘或以上，此程即享 HK$65 最低車資保證！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/upsidedowntrip.jpg')} />
        <Paragraph>
          乘客上車點與你當時位置相差較遠時，猶豫接不接單？由即日起至2018年1月1日上午四時，當你收到
          uberX 及 uberASSIST
          行程預約時，如果到達上車點的時間預計為10分鐘或以上，此程即享 HK$65
          最低車資保證！
        </Paragraph>
        <h3>計劃詳情</h3>
        <ul>
          <Li>
            由12月4日上午4時至1月1日上午4時期間開始並符合資格的行程均可享車資保證。
          </Li>
          <Li>補貼將與行程收入在下星期一併匯款。</Li>
          <Li>本活動最終解釋和決定權歸Uber所有。</Li>
        </ul>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/dec-event"
          bg={require('../PageHome/images/dec-event.jpg')}
        >
          特別活動
        </SuggestedPage>
        <SuggestedPage
          to="/yearend-party"
          bg={require('../PageHome/images/yearend-party.jpg')}
        >
          2017年慶祝派對暨「123日改變」回顧
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageUpsideDownTrip;
