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
        <h3>聖誕新年星級行程大賞圓滿結束</h3>
        <Paragraph>
          感謝各位司機夥伴為乘客提供了無數的五星行程！活動期間分別有21位及10位司機夥伴榮獲
          HK$8,000 旅行禮券或 iPhone
          X，準備與摯愛渡假或換部最新手機。再次恭喜得獎者！
        </Paragraph>
        <h3>除夕夜 iPhone X 大賞</h3>
        <Paragraph>
          Y. Chan 在12月31日完成了39個5星行程<br />
          W. Chan 在12月31日完成了37個5星行程<br />
          H. So 在12月31日完成了37個5星行程<br />
          V. Ho 在12月31日完成了36個5星行程<br />
          H. Leung 在12月31日完成了34個5星行程<br />
          K. Yip 在12月31日完成了33個5星行程<br />
          V. Wu 在12月31日完成了32個5星行程
        </Paragraph>
        <h3>旅行禮券大賞</h3>
        <Paragraph>
          K. Yuen 在12月31日完成了32個5星行程<br />
          F. Lam 在12月30日完成了28個5星行程<br />
          S. Tsui 在12月29日完成了26個5星行程<br />
          K. So 在12月28日完成了29個5星行程<br />
          N. Wong 在12月27日完成了29個5星行程<br />
          C. Mok 在12月26日完成了14個5星行程<br />
          W. Man 在12月25日完成了24個5星行程<br />
          H. So 在12月24日完成了26個5星行程<br />
          C. Lam 在12月24日完成了28個5星行程<br />
          O. Lau 在12月24日完成了28個5星行程<br />
          S. Yeung 在12月24日完成了32個5星行程<br />
          K. Lo 在12月23日完成了19個5星行程<br />
          Y. Hui 在12月22日完成了25個5星行程<br />
          C. Chan 在12月21日完成了25個5星行程<br />
          P. Lee 在12月20日完成了22個5星行程<br />
          W. Lam 在12月19日完成了19個5星行程<br />
          C. Lee 在12月18日完成了24個5星行程<br />
          H. Tong 在12月17日完成了15個5星行程<br />
          Y. Ng 在12月16日完成了15個5星行程<br />
          L. Wan 在12月15日完成了15個5星行程<br />
          M. Cheung 在12月14日完成了11個5星行程<br />
          S. Kong 在12月13日完成了10個5星行程<br />
          W. Lam 在12月12日完成了12個5星行程<br />
          J. Lo 在12月11日完成了11個5星行程
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
