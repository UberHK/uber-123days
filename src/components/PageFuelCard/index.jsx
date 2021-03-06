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

const A = styled.a`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageOilCard = () => (
  <PagePost
    back="#fuel-card"
    title="Shell油咭震撼優惠升級"
    introduction="Uber 一向致力為司機夥伴搜羅各種優惠，Shell 油咭優惠現已升級！基本折扣提升至每公升HK$2.7起。入油時無須繳付現金，每週使用上限由你決定，燃油消耗支出將從每週行程收入中扣除，方便快捷。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/fuel-card.png')} />
        <Paragraph>
          <h3>優惠詳情</h3>
          <p>此優惠只限已於 Uber 登記的車輛及司機夥伴尊享。</p>
          <p>
            仍未申請Shell油咭的司機夥伴可以登入優御會網站揀選適合的每週入油量。而早前已提交申請的司機夥伴可以登入優御會網站查看狀況及到
            Uber 服務中心領取你的油卡。
          </p>
          <p>
            不論是新申請或已有Shell 油咭的司機夥伴，只要在香港任何 Shell 油站出示 Shell 油咭，即可享每公升油費減 HK$2.7*
            的優惠，實行「揸多啲、慳多啲、賺多啲」！
          </p>
          <p>
            <A
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.uber.com/zh-HK/drive/hong-kong/resources/oilcard"
            >
              了解詳情
            </A>
          </p>
        </Paragraph>
        <p>*每公升 HK$2.7 折扣包括 Shell 咭基本每公升 HK$2.6 折扣及 Uber 之額外折扣</p>
      </Container>
      <Container padding="2rem 3rem 0">
        <Paragraph>
          <h3>究竟每個月可以慳幾多錢？</h3>
          <PrimaryImage src={require('./images/how-much-can-be-saved.png')} />
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/momentum"
          bg={require('../PageHome/images/momentum.png')}
        >
          優御會
        </SuggestedPage>
        <SuggestedPage
          to="/monthly-star"
          bg={require('../PageHome/images/monthly-star-2.png')}
        >
          每月之星
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageOilCard;
