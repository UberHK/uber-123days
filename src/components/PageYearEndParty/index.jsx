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

const A = styled.a`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageYearEndParty = () => (
  <PagePost
    back="#yearend-party"
    title="2017年慶祝派對暨「123日改變」回顧"
    introduction="為答謝司機夥伴本年度對 Uber 的支持，我們將於12月10日（星期日）舉辦慶祝派對暨「123日改變」回顧。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/yearend-party-2.jpg')} />
        <Paragraph>
          為答謝司機夥伴本年度對 Uber
          的支持與厚愛，我們將於12月10日（星期日）舉辦慶祝派對暨「123日改變」回顧。誠邀你當日下午帶同親友享用酒店自助餐及參與一系列節目包括抽獎環節*。
        </Paragraph>
        <Paragraph>
          日期及時間: 12月10日 （星期日）3:30 - 5:30 pm<br />
          地點：九龍城（詳細地址將通過確認電郵通知）
        </Paragraph>
        <h3>活動內容</h3>
        <ul>
          <Li>自助餐</Li>
          <Li>豐富禮品</Li>
          <Li>抽獎環節</Li>
          <Li>頒發十一月份「每月之星」獎項</Li>
        </ul>
        <Paragraph>
          可攜同兩位親友出席，活動費用全免（免費泊車位先到先泊）
        </Paragraph>
        *歡迎所有司機夥伴報名，十一月「每月之星」及從未參加 Uber
        活動的優秀司機夥伴優先。
        <Paragraph style={{ marginBottom: 48 }}>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="http://t.uber.com/123buffet"
          >
            了解更多
          </A>
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthlystar-4.jpg')}
        >
          每月之星
        </SuggestedPage>
        <SuggestedPage
          to="/giveaway"
          bg={require('../PageHome/images/giveaway.jpg')}
        >
          聖誕新年星級行程大賞
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageYearEndParty;
