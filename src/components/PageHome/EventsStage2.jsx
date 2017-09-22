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
        id="oilcard"
        imgUrl={require('./images/oilcard.png')}
        title="Shell油咭優惠升級"
        desc1="升級油咭優惠，基本折扣提升至每公升 HK$2.7！"
        desc2="入油時毋須繳付現金，油費每週於行程收入扣除，方便快捷。"
        to="/oilcard"
      />
      <HalfWidthPost
        id="driver-club"
        imgUrl={require('./images/driver-club.png')}
        title="優御會"
        desc1="十月份我們特別為你準備了更豐富的禮品，立即前往全新網站換領禮品！ "
        desc2=""
        to="/driver-club"
      />
      <HalfWidthPost
        id="monthly-star"
        imgUrl={require('./images/monthly-star-2.png')}
        title="每月之星"
        desc1="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
        desc2=""
        to="/monthly-star"
      />
      <h2>更多精彩活動</h2>
      <RegularPost
        id="airport"
        imgUrl={require('./images/multi-destinations.jpg')}
        title="機場前往市區補貼"
        desc1="完成往機場範圍之行程後，即時前往市區接單，將獲 HK$50 補貼。"
        desc2=""
        to="/airport"
      />
      <RegularPost
        id="lost-items"
        imgUrl={require('./images/monthly-star.jpg')}
        title="乘客失物處理"
        desc1="將乘客失物送到 Uber 服務中心，而該乘客又取回物品後，你將獲 HK$100 獎勵。"
        desc2=""
        to="/lost-items"
      />
      <RegularPost
        id="oct-event"
        imgUrl={require('./images/sept-event.jpg')}
        title="特別活動"
        desc1="Uber 司機夥伴親子嘉年華將於十月中舉行。"
        desc2=""
        to="/oct-event"
      />
    </Container>
  </FullWidth>
);

export default EventsStage2;
