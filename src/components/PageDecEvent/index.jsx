// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import Paragraph from '../PagePost/Paragraph';
import FullWidth from '../FullWidth';
import Container from '../Container';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
`;

const PageDecEvent = () => (
  <PagePost
    back="#dec-event"
    title="特別活動"
    introduction="首屆 Uber 四人室內足球大賽將於12月9日（星期六）舉行！立即與好友組隊參賽，捧走獎盃！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/dec-event2.jpg')} />
        <Paragraph>
          首屆 「Uber 四人室內足球大賽
          」即將舉行！我們誠邀你與朋友組隊參加12月9日於觀塘舉行的四人足球大賽。屆時曾當選「香港足球先生」的前港足名宿陳炳安會坐鎮，指點球技、分享比賽心得，並頒發超過總值HK$10,000的豐厚獎品，並頒發由
          Uber 提供及飛龍球場贊助的豐厚獎品。
        </Paragraph>
        <Paragraph>
          名額有限，立即與好友組隊參賽，捧走獎盃！ 歡迎親友到場打氣觀賽！
        </Paragraph>
        <Paragraph>
          日期及時間：12月9日 （星期六）12:00 - 7:00 pm<br />
          地點： 飛龍室內足球場<br />
          地址： 九龍觀塘觀塘道398-402號嘉域大廈6樓
        </Paragraph>
        <h3>活動回顧 - 《正義聯盟》電影放送會</h3>
        <Paragraph>
          Uber
          於11月19日包場請司機夥伴連同一家大細觀賞DC最新力作《正義聯盟》。當日座無虛席，大家一邊享用爆谷、飲品，一邊投入電影當中，度過了熱鬧歡愉的一日。
        </Paragraph>
        <h3>活動回顧 - Uber x Motor City 汽車試駕及保養日</h3>
        <Paragraph>
          11月15日，近 80 位司機夥伴出席了 Uber x Motor City
          汽車試駕及保養日，大家都踴躍就汽車保養、精明駕駛和慳油貼士發問。活動當日亦安排了多個車款供司機夥伴試車，當中電動車
          Tesla 系列最受歡迎。而在大抽獎環節中，幸運兒獲贈 GoGoWash
          免費洗車或洗偈服務，以及 Uber 精美禮品，人人滿載而歸。
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/yearend-party"
          bg={require('../PageHome/images/yearend-party.jpg')}
        >
          2017年慶祝派對暨「123日改變」回顧
        </SuggestedPage>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthlystar-4.jpg')}
        >
          每月之星
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageDecEvent;
