// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const FullWidthImage = styled.img`
  text-align: center;
  width: 100%;
  max-width: 48rem;
`;

const Full = Container.extend`
  padding: 0;
  ${Media.fromWidth('SM').css`
    padding: 0 3rem;
  `};
`;

const PageMinFare = () => (
  <PagePost
    back="#min-fare"
    title="最低車資上調！保證你每個行程的基本收入"
    introduction="乘客的最低車資已經調高：uberX 為 HK$40，UberBLACK 及七人車為 HK$60。車程再短，收入都有保障！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/dollar.jpg')}>
          <p>由2017年8月21日開始，無論是由港島或九龍新界出發的行程，最低車資均有以下調整：</p>
          <ul>
            <li>uberX 和關懷優步行程：港幣 $25/30 → $40</li>
            <li>UberBLACK 和七人車行程：港幣 $50 → $60</li>
          </ul>
        </PrimaryImage>
        <Paragraph>日後無論接到長途或短途的行程，一樣有錢途！</Paragraph>
      </Container>
      <Container padding="0 3rem">
        <h2>詳細比較</h2>
      </Container>
      <Full>
        <FullWidthImage alt="" src={require('./images/fare.png')} />
      </Full>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/multi-destinations"
          bg={require('../PageHome/images/multi-destinations.jpg')}
        >
          乘客可增設中途站
        </SuggestedPage>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthly-star.jpg')}
        >
          每月之星
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMinFare;
