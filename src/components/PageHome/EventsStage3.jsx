// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import FullWidth from '../../components/FullWidth';
import Container from '../../components/Container';
import FullWidthPost from '../Post/FullWidthPost';
import HalfWidthPost from '../Post/HalfWidthPost';
import QuarterPost from '../Post/QuarterPost';

const EventsStage3 = () => (
  <FullWidth bgColor="#e5e5e5">
    <Container padding="3rem 1rem 5rem">
      <h2>第三階段重點</h2>
      <FullWidthPost
        id="trip-preference"
        imgUrl={require('./images/trip-pref.png')}
        title="自選兩邊單"
        desc1="想同時接兩邊單善用每分每秒，還是只做 UberBLACK 賺取更高收入？"
        desc2="現在司機夥伴 App 可隨你喜好選擇接單種類，無任何時間或地區限制，完全由你實時決定。"
        to="/trip-preference"
      />
      <HalfWidthPost
        id="venue"
        imgUrl={require('./images/venue.png')}
        title="建議上車點"
        desc1="為方便你接載乘客，我們正陸續在各大型商場及熱門地方添加建議上車點，乘客可在叫車時直接到指定上車點與你會面。"
        desc2=""
        to="/venue"
      />
      <HalfWidthPost
        id="nov-event"
        imgUrl={require('./images/nov-event.png')}
        title="特別活動"
        desc1="Uber 包場請你免費睇《正義聯盟》！司機夥伴可帶同最多2位親友觀賞這部DC鉅作，享用免費爆谷飲品、免費泊車。"
        desc2=""
        to="/nov-event"
      />
      <h2>更多精彩活動</h2>
      <QuarterPost
        id="carcare-day"
        imgUrl={require('./images/carcare-day.png')}
        title="汽車試駕及保養日"
        desc1="Motor City 專業人士分享汽車保養知識及慳油貼士，介紹多款慳油及高性能車輛。"
        desc2=""
        to="/carcare-day"
      />
      <QuarterPost
        id="monthly-star"
        imgUrl={require('./images/monthly-star-3.jpg')}
        title="每月之星"
        desc1="過去兩個月已有10位司機夥伴成為 Uber「每月之星」，你會是下一位 Uber「每月之星」嗎？"
        desc2=""
        to="/monthly-star"
      />
      <QuarterPost
        id="inapp-chat"
        imgUrl={require('./images/inapp-chat.png')}
        title="App 內訊息功能"
        desc1="現在透過司機夥伴 App 即可與乘客直接以文字訊息溝通，前往接載他們時自然更準確。"
        desc2=""
        to="/inapp-chat"
      />
      <QuarterPost
        id="share-trip"
        imgUrl={require('./images/trip-sharing.png')}
        title="行程分享功能"
        desc1="現在你可直接透過 App 與親友分享位置及行程狀態，讓摯愛時刻緊貼你的動向。"
        desc2=""
        to="/share-trip"
      />
    </Container>
  </FullWidth>
);

export default EventsStage3;
