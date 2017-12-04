// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import FullWidth from '../../components/FullWidth';
import Container from '../../components/Container';
import FullWidthPost from '../Post/FullWidthPost';
import HalfWidthPost from '../Post/HalfWidthPost';
import RegularHalfPost from '../Post/RegularHalfPost';

const EventsStage4 = () => (
  <FullWidth bgColor="#e5e5e5">
    <Container padding="3rem 1rem 5rem">
      <h2>第四階段重點</h2>
      <FullWidthPost
        id="freetrip-giveaway"
        imgUrl={require('./images/giveaway.jpg')}
        title="聖誕新年星級行程大賞"
        desc1="活動期間每日完成最多5星行程的司機夥伴即獲價值 HK$8,000 的旅行禮券！"
        desc2="你給乘客的星級行程，換 Uber 送你的星級旅程。"
        to="/freetrip-giveaway"
      />
      <HalfWidthPost
        id="longtrip-bonus"
        imgUrl={require('./images/upsidedowntrip.jpg')}
        title="遠程接單車資保證2017"
        desc1="直至2018年1月1日凌晨，當你收到行程預約時，如到達上車點的時間預計為10分鐘或以上，此程即享 HK$65 最低車資保證！"
        desc2=""
        to="/longtrip-bonus"
      />
      <HalfWidthPost
        id="dec-event"
        imgUrl={require('./images/dec-event.jpg')}
        title="特別活動"
        desc1="首屆 Uber 四人室內足球大賽將於12月9日（星期六）舉行！立即與好友組隊參賽，捧走獎盃！"
        desc2=""
        to="/dec-event"
      />
      <h2>更多精彩活動</h2>
      <RegularHalfPost
        id="yearend-party"
        imgUrl={require('./images/yearend-party.jpg')}
        title="2017年慶祝派對暨「123日改變」回顧"
        desc1="為答謝司機夥伴本年度對 Uber 的支持，我們將於12月10日（星期日）舉辦慶祝派對暨「123日改變」回顧。"
        desc2=""
        to="/yearend-party"
      />
      <RegularHalfPost
        id="monthly-star"
        imgUrl={require('./images/monthlystar-4.jpg')}
        title="每月之星"
        desc1="我們將於12月10日（星期日）的慶祝派對，嘉許在「123日改變」活動期間奪得「每月之星」的最後五位司機夥伴，送上特別獎賞。"
        desc2=""
        to="/monthly-star"
      />
    </Container>
  </FullWidth>
);

export default EventsStage4;
