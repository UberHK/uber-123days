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

const A = styled.a`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageMomentum = () => (
  <PagePost
    back="#driver-club"
    title="優御會"
    introduction="作為全港最大車會，全新優御會網站讓你更輕鬆體驗會員優惠，隨時隨地換領禮物及報名參加精彩活動。十月份我們特別為司機夥伴準備了更豐富的禮品供換領，數量有限，先換先得。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/momentum.png')}>
          <p>
            優御會會員分別為基本級，精英級及大師級。只要達到一定評分及行程數量就可晉升更高會員級別，可享其他升級折扣優惠。
          </p>立即前往最新優御會網站：<br />
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.driveuber.hk"
          >
            瀏覽 driveuber.hk
          </A>
        </PrimaryImage>
        <Paragraph />
        <Paragraph>
          <h3>全新禮品</h3>
          <PrimaryImage src={require('./images/gifts.png')} />
          <p>
            立即前往優御會禮品換領區：<br />
            <A
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.driveuber.hk/shop"
            >
              瀏覽 driveuber.hk
            </A>
          </p>
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
