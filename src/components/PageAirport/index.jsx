// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const PageAirport = () => (
  <PagePost
    back="#airport"
    title="機場前往市區補貼"
    introduction="完成往機場範圍之行程後，即時前往市區接單，將獲 HK$50 補貼。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/cheer.jpg')}>
          <p>
            我們深知你希望把握每一分、每一秒在行程途中，增加行程收入。有時候在機場範圍等候時間較長，我們建議司機夥伴前往市區接單。若你在指定日期及時間*內，完成往機場範圍之行程後，即時前往市區接單，將額外獲得
            HK$50 作為補貼。
          </p>
        </PrimaryImage>
        <p>* 機場前往市區補貼在指定時間生效時，司機夥伴會收到 app 內訊息提示。</p>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage to="/GLH" bg={require('../PageHome/images/glh.jpg')}>
          全新 Uber 服務中心
        </SuggestedPage>
        <SuggestedPage
          to="/24-hour-hotline"
          bg={require('../PageHome/images/24-hour-hotline.jpg')}
        >
          24 小時司機夥伴支援熱線
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageAirport;
