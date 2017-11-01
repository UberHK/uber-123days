// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';

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

const PageMonthlyStarAwardee = () => (
  <PagePost
    back="monthly-star"
    title="每月之星"
    introduction="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
  >
    <FullWidth>
      <Container padding="1rem 3rem" bgColor="#fdfdfd">
        <h2>九月「每月之星」</h2>
        <Paragraph>
          上月我們在 Uber 服務中心舉行的優秀司機夥伴聚會中頒發了九月「每月之星」。每位得獎司機夥伴均獲得精美獎座及價值 HK$3,000 的
          Shell 油劵。他們亦跟我們分享了過去在 Uber 平台上的點滴。我們再一次多謝司機夥伴一直以來的支持。
        </Paragraph>
        <h3>得獎名單</h3>
        <Table>
          <tr>
            <td>五星大賞</td>
            <td>Jeff L.</td>
            <td>324程5星行程</td>
          </tr>
          <tr>
            <td>乘客之選</td>
            <td>Kin L.</td>
            <td>100程 平均4.98星</td>
          </tr>
          <tr>
            <td>榮譽勳章</td>
            <td>Stephen K.</td>
            <td>193個勳章</td>
          </tr>
          <tr>
            <td>熱心之最</td>
            <td>Fai L.</td>
            <td>262程 99.7%接單率</td>
          </tr>
          <tr>
            <td>關懷備至</td>
            <td>Bun L.</td>
            <td>29程關懷優步行程</td>
          </tr>
        </Table>
        <br />
        <h2>八月「每月之星」</h2>
        <Paragraph>
          我們早前在 Uber 司機夥伴慶祝晚宴暨「123日改變」啟動儀式上頒發了八月「每月之星」，每位得獎司機夥伴均獲贈精美獎座及價值
          HK$3,000 的 Shell 油咭，以答謝他們的超卓表現。我們再次感謝各位司機夥伴為共乘交通出一分力。
        </Paragraph>
        <h3>得獎名單</h3>
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
        <br />
        <br />
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMonthlyStarAwardee;
