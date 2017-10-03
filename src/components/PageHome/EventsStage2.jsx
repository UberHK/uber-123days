// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import FullWidth from '../../components/FullWidth';
import Container from '../../components/Container';
import FullWidthPost from '../Post/FullWidthPost';
import HalfWidthPost from '../Post/HalfWidthPost';
import RegularPost from '../Post/RegularPost';

const EventsStage2 = () => (
  <FullWidth bgColor="#e5e5e5">
    <Container padding="3rem 1rem 5rem">
      <h2>第二階段重點</h2>
      <FullWidthPost
        id="fuel-card"
        imgUrl={require('./images/fuel-card.png')}
        title="Shell 油咭優惠升級"
        desc1="Shell 油咭優惠現已升級！基本折扣提升至每公升 HK$2.7起。"
        desc2="入油時毋須繳付現金，油費每週於行程收入扣除，方便快捷。"
        to="/fuel-card"
      />
      <HalfWidthPost
        id="momentum"
        imgUrl={require('./images/momentum.png')}
        title="優御會"
        desc1="全新優御會網站已經推出，從速換領更豐富的禮品吧！"
        desc2=""
        to="/momentum"
      />
      <HalfWidthPost
        id="monthly-star"
        imgUrl={require('./images/monthly-star-2.png')}
        title="每月之星"
        desc1="每月在指定範疇表現最佳的司機夥伴將成為「每月之星」。"
        desc2="九月份的得獎者將獲邀出席頒獎聚餐，贏取豐富獎賞。"
        to="/monthly-star"
      />
      <h2>更多精彩活動</h2>
      <RegularPost
        id="airport"
        imgUrl={require('./images/airport.png')}
        title="機場前往市區補貼"
        desc1="完成往機場範圍之行程後，即時前往市區接單，將獲 HK$50 補貼。"
        desc2=""
        to="/airport"
      />
      <RegularPost
        id="lost-and-found"
        imgUrl={require('./images/lost_and_found.png')}
        title="路不拾遺獎勵計劃"
        desc1="即日起至12月31日，只要將失物送到 Uber 服務中心，在乘客取回物品後你將獲 HK$100 獎勵。"
        desc2=""
        to="/lost-and-found"
      />
      <RegularPost
        id="oct-event"
        imgUrl={require('./images/oct-event.png')}
        title="特別活動"
        desc1="Uber 將於十月中為司機夥伴舉行同樂嘉年華，誠邀司機夥伴攜同家人及朋友出席。"
        desc2=""
        to="/oct-event"
      />
    </Container>
  </FullWidth>
);

export default EventsStage2;
