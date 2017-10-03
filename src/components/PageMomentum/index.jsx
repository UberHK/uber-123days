// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const PageMomentum = () => (
  <PagePost
    back="#driver-club"
    title="優御會"
    introduction="作為全港最大車會，全新優御會網站讓你更輕鬆體驗會員優惠，隨時隨地換領禮物及報名參加精彩活動。十月份我們特別為司機夥伴準備了更豐富的禮品供換領，數量有限，先換先得。優御會會員分別為基本級，精英級及大師級。只要達到一定評分及行程數量就可晉升更高會員級別，可享其他升級折扣優惠。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/momentum.png')} />
        <Paragraph>
          立即前往最新優御會網站：
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.driveuber.hk"
          >
            https://www.driveuber.hk
          </a>
        </Paragraph>
        <Paragraph>
          <h3>全新禮品</h3>
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthly-star-2.png')}
        >
          每月之星
        </SuggestedPage>
        <SuggestedPage
          to="/airport"
          bg={require('../PageHome/images/airport.png')}
        >
          機場前往市區補貼
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMomentum;
