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
        <h2>十月「每月之星」得獎名單</h2>
        <Table>
          <tr>
            <td>五星大賞</td>
            <td>Po. L</td>
            <td>279程5星行程</td>
          </tr>
          <tr>
            <td>乘客之選</td>
            <td>Wing C.</td>
            <td>113程 平均4.97星</td>
          </tr>
          <tr>
            <td>榮譽勳章</td>
            <td>Stephen K.</td>
            <td>294個勳章</td>
          </tr>
          <tr>
            <td>熱心之最</td>
            <td>Ken L.</td>
            <td>89程 98.3%接單率</td>
          </tr>
          <tr>
            <td>關懷備至</td>
            <td>Chi L.</td>
            <td>18程關懷優步行程</td>
          </tr>
        </Table>
        <br />
        <h2>九月「每月之星」得獎名單</h2>
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
        <h2>八月「每月之星」得獎名單</h2>
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
