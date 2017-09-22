// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Table = styled.table`
  border: 2px solid #dfdfdf;
  border-collapse: collapse;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  > th,
  td {
    padding: 0.5rem;
    border: 2px solid #dfdfdf;
  }
`;

const PageMonthlyStar = () => (
  <PagePost
    back="#monthly-star"
    title="每月之星"
    introduction="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/prize.jpg')}>
          <p>
            Uber 能廣受香港人歡迎，全因有你和各位司機夥伴一直提供優質可靠的共乘服務。為表揚平台上優秀的司機夥伴， 並鼓勵各位師兄師姐與
            Uber 一起進步，由九月到十一月，將會有共15位司機夥伴成為 Uber「每月之星」及特別獎賞！
          </p>
        </PrimaryImage>
      </Container>
      <Container padding="3rem 3rem 1rem">
        <Paragraph>
          每月之星獎項包括：
          <ol>
            <li>五星大賞 - 完成最多5星行程的司機夥伴</li>
            <li>乘客之選 - 平均評分最高的司機夥伴</li>
            <li>榮譽勳章 - 獲得最多乘客勳章的司機夥伴</li>
            <li>熱心之最 - 接單率最高的司機夥伴</li>
            <li>關懷備至 - 完成最多關懷優步行程的司機夥伴</li>
          </ol>
        </Paragraph>
        <p>
          *條款及細則：
          九月份有機會獲獎（即八月達到指定條件）的司機夥伴會受邀請出席九月初的慶祝晚宴暨「123日改變」啟動儀式。司機夥伴需成功登記及出席晚宴去參與「每月之星」活動。十月及十一月的「每月之星」獎項（過去一個月達到指定條件）將另作安排。活動最終解釋和決定權歸
          Uber 所有。
        </p>
      </Container>
      <Container padding="1rem 3rem">
        <h3>八月「每月之星」</h3>
        <Paragraph>
          我們早前在 Uber 司機夥伴慶祝晚宴暨「123日改變」啟動儀式上頒發了八月「每月之星」獎項及價值$3,000的 Shell
          油咭，答謝表現超卓的司機夥伴。我們再次感謝各位司機夥伴為共乘交通出一分力。
        </Paragraph>
        <h4>八月「每月之星」得獎名單</h4>
        <Table>
          <tr>
            <td>五星大賞</td>
            <td>Nick N.</td>
            <td>300程5星行程</td>
          </tr>
          <tr>
            <td>乘客之選</td>
            <td>Jerry C.</td>
            <td>152程 平均4.93星</td>
          </tr>
          <tr>
            <td>榮譽勳章</td>
            <td>Po L.</td>
            <td>73個勳章</td>
          </tr>
          <tr>
            <td>熱心之最</td>
            <td>Rachel L.</td>
            <td>167程 95.7%接單率</td>
          </tr>
          <tr>
            <td>關懷備至</td>
            <td>Wai W.</td>
            <td>26程關懷優步行程</td>
          </tr>
        </Table>
        <h4>八月「每月之星」得獎司機夥伴分享</h4>
        <Paragraph>我們訪問了其中兩位八月得獎司機夥伴分享他們的獲獎心得和駕駛小故事。</Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/sept-event"
          bg={require('../PageHome/images/sept-event.jpg')}
        >
          特別活動
        </SuggestedPage>
        <SuggestedPage to="/GLH" bg={require('../PageHome/images/glh.jpg')}>
          全新 Uber 服務中心
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMonthlyStar;
