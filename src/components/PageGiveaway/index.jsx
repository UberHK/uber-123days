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
          HK$8,000 的旅行禮券！
        </Paragraph>
        <h3>加碼送出 iPhone X 10 部 繼續放送 HK$8,000 旅行禮券</h3>
        <Paragraph>
          由於星級行程大賞活動反應熱烈，我們在平安夜加送3部 iPhone
          X*，除夕更將會加送7部 iPhone
          X*，給予當日完成最多5星行程的首7名司機夥伴。而第8名的司機夥伴就會獲得原定每日送出的
          HK$8,000*
          旅行禮券！記得查看電郵，留意該兩晚的封路措施及交通安排，方便乘客上落車，自然可以完成更多5星行程啦！
        </Paragraph>
        <Paragraph>
          活動已經有 19 位司機夥伴成功贏得星級行程大賞，並一起完成了超過 375 個
          5 星行程。即刻開始你的5星行程，換來與摯愛的星級旅程！
        </Paragraph>
        <Paragraph>
          J. Lo 在12月11日完成了11個5星行程<br />
          W. Lam 在12月12日完成了12個5星行程<br />
          S. Kong 在12月13日完成了10個5星行程<br />
          M. Cheung 在12月14日完成了11個5星行程<br />
          L. Wan 在12月15日完成了15個5星行程<br />
          Y. Ng 在12月16日完成了15個5星行程<br />
          H. Tong 在12月17日完成了15個5星行程<br />
          C. Lee 在12月18日完成了24個5星行程<br />
          W. Lam 在12月19日完成了19個5星行程<br />
          P. Lee 在12月20日完成了22個5星行程<br />
          C. Chan 在12月21日完成了25個5星行程<br />
          Y. Hui 在12月22日完成了25個5星行程<br />
          K. Lo 在12月23日完成了19個5星行程<br />
          S. Yeung 在12月24日完成了32個5星行程<br />
          O. Lau 在12月24日完成了28個5星行程<br />
          C. Lam 在12月24日完成了28個5星行程<br />
          H. So 在12月24日完成了26個5星行程<br />
          W. Man 在12月25日完成了24個5星行程<br />
          C. Mok 在12月26日完成了14個5星行程<br />
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
