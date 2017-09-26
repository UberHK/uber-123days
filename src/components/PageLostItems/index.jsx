// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const LostItems = () => (
  <PagePost
    back="#sept-event"
    title="乘客失物處理「路不拾遺獎勵計劃」"
    introduction="九月初，我們會邀請一班優秀司機夥伴及家人參加晚宴及抽獎活動。之後我們會繼續舉辦不同活動，敬請期待！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/cheer.jpg')}>
          <p>假如乘客在車上遺留私人物品，你可以直接聯絡乘客安排交還物品。</p>
          <p>
            除此之外，你亦可以將物品送到 Uber
            服務中心，我們會代你聯絡乘客取回物品，節省你和乘客相約的時間。由即日起至12月31日，只要乘客親身到 Uber
            服務中心取回你所交還的物品，我們將會給你 HK$100 獎勵，作為答謝。
          </p>
        </PrimaryImage>
        <Paragraph>
          <p>當然，你亦可在乘客下車前，提醒他們檢查有否帶齊所有隨身物品！感謝你一直以來為乘客提供五星的行程體驗。</p>
          <h3>計劃詳情</h3>
          <p>
            路不拾遺獎勵試行計劃適用於2017年10月3日至12月31日期間完成的行程。 乘客只要在2017年12月31日前到 Uber
            服務中心取回物件，司機夥伴便會在一星期内收到 HK$100 的路不拾遺獎勵。 Uber
            服務中心並不能代司機夥伴處理任何食物、現金、信用卡、有害物品、武器、藥物及其他非法物品。
          </p>
        </Paragraph>
        <Paragraph>
          <h3>【冷知識】10 項最常被遺留在共乘行程的物件</h3>
        </Paragraph>
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

export default LostItems;
