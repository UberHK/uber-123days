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

const ImgContainer = styled.div`
  text-align: center;
  ${Media.fromWidth('MD').css`
    text-align: left;
  `};
`;

const Img = styled.img`width: 10rem;`;

const Step = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  ${Media.fromWidth('MD').css`
    width: 33.333%;
  `};
`;

const PageMultiDestinations = () => (
  <PagePost
    back="#multi-destinations"
    title="乘客可增設中途站"
    introduction="現在，乘客可以在 Uber app 內加入多個目的地。系統將會顯示完整路線，以及沿途的所有停車點。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/car.jpg')}>
          <Paragraph>
            乘客現可在 App 內選擇最多3個下車點。新功能不單可為你和乘客預先計算整段路線的車資，亦可讓行程路線變得更流暢。
          </Paragraph>
        </PrimaryImage>
      </Container>
      <Container padding="3rem 3rem 1rem">
        <h2>如何使用</h2>
        <Step>
          <ImgContainer>
            <Img alt="" src={require('./images/icon1.png')} />
          </ImgContainer>
          <h2>第一步</h2>
          <Paragraph>待乘客準備好後，即可按「開始行程」，隨時出發！如乘客有中途站，你即可在地圖上看到整條路線。</Paragraph>
        </Step>
        <Step>
          <ImgContainer>
            <Img alt="" src={require('./images/icon2.png')} />
          </ImgContainer>
          <h2>第二步</h2>
          <Paragraph>當你到達中途站時，請滑動「確認停站位置」，然後系統便會自動為你計劃路線前往下一個目的地！</Paragraph>
        </Step>
        <Step>
          <ImgContainer>
            <Img alt="" src={require('./images/icon3.png')} />
          </ImgContainer>
          <h2>第三步</h2>
          <Paragraph>
            當你到達最終目的地時，你便可一如以往地滑動「結束行程」的按鈕，並為乘客評分。系統將按照乘客輸入的中途站規劃路線並計算車資。
          </Paragraph>
        </Step>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthly-star.jpg')}
        >
          每月之星
        </SuggestedPage>
        <SuggestedPage
          to="/sept-event"
          bg={require('../PageHome/images/sept-event.jpg')}
        >
          特別活動
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMultiDestinations;
