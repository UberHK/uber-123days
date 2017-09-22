// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import FullWidth from '../../components/FullWidth';
import Container from '../../components/Container';
import FullWidthPost from '../Post/FullWidthPost';
import HalfWidthPost from '../Post/HalfWidthPost';
import RegularPost from '../Post/RegularPost';

const EventsStage1 = () => (
  <FullWidth bgColor="#e5e5e5">
    <Container padding="3rem 1rem 5rem">
      <h2>第一階段重點</h2>
      <FullWidthPost
        id="glh"
        imgUrl={require('./images/glh.jpg')}
        title="全新 Uber 服務中心"
        desc1="全新服務中心的面積是以前的四倍，人手更充足，縮短你的等候時間。"
        desc2="另外，每週關注小組及一對一會面亦為你提供更貼心的服務。"
        to="/GLH"
      />
      <HalfWidthPost
        id="24-hour-hotline"
        imgUrl={require('./images/24-hour-hotline.jpg')}
        title="24 小時司機夥伴支援熱線"
        desc1="支援熱線服務已延長至每日24小時無間斷！"
        desc2="只需致電 5803 2260，即可連接我們的支援人員。"
        to="/24-hour-hotline"
      />
      <HalfWidthPost
        id="min-fare"
        imgUrl={require('./images/min-fare.jpg')}
        title="最低車資上調"
        desc1="乘客的最低車資已經調高：uberX 為 HK$40，UberBLACK 及七人車為 HK$60。"
        desc2="車程再短，收入都有保障！"
        to="/min-fare"
      />
      <h2>更多精彩活動</h2>
      <RegularPost
        id="multi-destinations"
        imgUrl={require('./images/multi-destinations.jpg')}
        title="乘客可增設中途站"
        desc1="現在，乘客可以在 Uber app 內加入多個目的地。"
        desc2="系統將會顯示完整路線，以及沿途的所有停車點。"
        to="/multi-destinations"
      />
      <RegularPost
        id="monthly-star"
        imgUrl={require('./images/monthly-star.jpg')}
        title="每月之星"
        desc1="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
        desc2=""
        to="/monthly-star"
      />
      <RegularPost
        id="sept-event"
        imgUrl={require('./images/sept-event.jpg')}
        title="特別活動"
        desc1="九月初，優秀及長期支持Uber 的司機夥伴及家人會獲邀參加慶祝晚宴及頒獎典禮。"
        desc2="之後亦會有不同為你而設的活動，敬請期待！"
        to="/sept-event"
      />
    </Container>
  </FullWidth>
);

export default EventsStage1;
