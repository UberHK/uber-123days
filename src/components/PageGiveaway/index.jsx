// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Link from 'gatsby-link';

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

const PageGiveaway = () => (
  <PagePost
    back="#freetrip-giveaway"
    title="聖誕新年星級行程大賞"
    introduction="你給乘客的星級行程，換 Uber 送你的星級旅程。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/giveaway2.jpg')} />
        <Paragraph>
          從12月11日至2018年1月1日凌晨，每日完成最多5星行程的司機夥伴即獲價值
          HK$8,000
          的旅行禮券！全月將會有21位司機夥伴得獎，現在就開始你的5星行程吧！
        </Paragraph>
        <h3>加碼送出 iPhone X 6 部 繼續放送 HK$8,000 旅行禮券</h3>
        <Paragraph>
          由於星級行程大賞活動反應熱烈，我們將會在平安夜同除夕各加送3部 iPhone
          X*，給予當日完成最多5星行程的首3名司機夥伴。而第4名的司機夥伴就會獲得原定每日送出的
          HK$8,000*
          旅行禮券！記得查看電郵，留意該兩晚的封路措施及交通安排，方便乘客上落車，自然可以完成更多5星行程啦！
        </Paragraph>
        <Paragraph>
          活動已經有9個得獎司機夥伴成功贏取 HK$8,000
          旅行禮券。即刻開始你的5星行程，換來與摯愛的星級旅程！
        </Paragraph>
        <Paragraph>
          J. Lo 在12月11日完成了11個5星行程<br />
          W. Lam 在12月12日完成了12個5星行程<br />
          S. Kong 在12月13日完成了10個5星行程<br />
          M. Cheung 在12月14日完成了11個五星行程<br />
          L. Wan 在12月15日完成了15個五星行程<br />
          Y. Ng 在12月16日完成了15個五星行程<br />
          H. Tong 在12月17日完成了15個 5星行程<br />
          C. Lee 在12月18日完成了24個 5星行程<br />
          W. Lam 在12月19日完成了19個 5星行程<br />
        </Paragraph>
        <h3>計劃詳情</h3>
        <ul>
          <Li>活動當天上午四時至翌日上午四時期間開始的行程。</Li>
          <Li>本活動最終解釋和決定權歸Uber所有。</Li>
        </ul>
        <p>
          * <Link to="/freetrip-giveaway-terms">優惠受條款及細則約束。</Link>
        </p>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/longtrip-bonus"
          bg={require('../PageHome/images/upsidedowntrip.jpg')}
        >
          遠程接單車資保證
        </SuggestedPage>
        <SuggestedPage
          to="/dec-event"
          bg={require('../PageHome/images/dec-event.jpg')}
        >
          特別活動
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageGiveaway;
