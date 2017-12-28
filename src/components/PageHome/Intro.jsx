// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import OffsetFullWidth from '../../components/OffsetFullWidth';
import Container from '../../components/Container';
import H2 from '../../components/H2';
import P2 from '../../components/P2';

const IntroContainer = styled(Container)`
  padding: 3rem 2rem;
  ${Media.fromWidth('MD').css`
    padding: 3rem 5rem;
  `};
`;

const FullWidth = OffsetFullWidth.extend`
  top: -4rem;
  margin-bottom: 0;
  ${Media.fromWidth('MD').css`
    top: -6rem;
    margin-bottom: -6rem;
  `};
`;

const Intro = () => (
  <FullWidth>
    <IntroContainer bgColor="#fff">
      <H2>【123日改變．最終回】聖誕新年星級行程大賞</H2>
      <P2>
        聖誕新年將至，「123日改變」亦進入尾聲，然而我們為你努力從不休止，我們承諾來年繼續為你提供實際、貼心的服務。
      </P2>
      <P2>
        第四期，獎勵及優惠將全面加碼，以感謝你一年來為共乘服務的貢獻！我們承諾繼續改善你的平台體驗，並將送出
        10 部 iPhone X 及總值高達 HK$168,000
        的旅行套票，給予特別優秀的星級司機夥伴，帶同摯愛來一趟屬於你們自己的星級旅程。
      </P2>
      <P2>
        活動期間我們亦會提供遠程接單車資保證至 HK$65，並繼續嘉許
        Uber「每月之星」，答謝你一直為乘客提供優質共乘服務。首屆 Uber
        四人室內足球大賽即將開鑼，我們亦誠邀你參與2017年慶祝派對暨「123日改變」回顧。感激在共乘服務路上，有你與
        Uber 一路同行。
      </P2>
      <P2>
        由即日起至2018年1月1日上午四時，當你收到行程預約時，如果螢幕顯示到達上車點的時間預計為10分鐘或以上，此程即享
        HK$65 最低車資保證！
      </P2>
    </IntroContainer>
  </FullWidth>
);

export default Intro;
