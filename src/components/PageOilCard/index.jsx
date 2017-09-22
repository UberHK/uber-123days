// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const PageOilCard = () => (
  <PagePost
    back="#sept-event"
    title="特別活動"
    introduction="九月初，我們會邀請一班優秀司機夥伴及家人參加晚宴及抽獎活動。之後我們會繼續舉辦不同活動，敬請期待！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/cheer.jpg')}>
          <p>一路走來，你並不孤單。你的身後，一直都有我們和各位師兄師姐為你撐腰打氣！</p>
          <p>
            九月初，我們會特別邀請特選司機夥伴及家人一起參加慶祝晚宴暨「123日改變」啟動儀式，讓大家聚首一堂，訴說上線的苦與樂。期後我們將繼續舉辦不同活動，與你一起建設更緊密溫馨的司機夥伴社群。敬請熱切期待。
          </p>
        </PrimaryImage>
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

export default PageOilCard;
