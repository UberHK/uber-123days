// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const PageOilCard = () => (
  <PagePost
    back="#oil-card"
    title="Shell油咭震撼優惠升級"
    introduction="Uber 一向致力為司機夥伴搜羅各種優惠，Shell 油咭優惠現已升級！特選司機夥伴可享高達每公升 HK$3，基本折扣提升至每公升 HK$2.7。入油時無須繳付現金，油費每週於行程收入扣除，方便快捷。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/cheer.jpg')}>
          <p>此優惠只限已於 Uber 登記的車輛及司機夥伴尊享。</p>
          <p>
            仍未申請Shell油咭的司機夥伴可以登入優御會網站揀選適合的每週入油量。而早前已提交申請的司機夥伴可以登入優御會網站查看狀況及到
            Uber 服務中心領取你的油卡。
          </p>
        </PrimaryImage>
        <Paragraph>
          <h3>優惠詳情</h3>
          <p>此優惠只限已於 Uber 登記的車輛及司機夥伴尊享。</p>
          <p>
            仍未申請Shell油咭的司機夥伴可以登入優御會網站揀選適合的每週入油量。而早前已提交申請的司機夥伴可以登入優御會網站查看狀況及到
            Uber 服務中心領取你的油卡。
          </p>
          <p>
            司機夥伴只要在香港任何 Shell 油站出示 Uber 油卡，即可享每公升油費減＄2.7* 的優惠，特選司機夥伴更可享高達每公升
            HK$3，實行「揸多啲、慳多啲、賺多啲」！
          </p>
          <p>
            了解詳情：<a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.uber.com/oilcardhk"
            >
              t.uber.com/oilcardhk
            </a>
          </p>
        </Paragraph>
        <p>*Shell 提供的折扣為每公升 HK$2.6</p>
      </Container>
      <Container padding="2rem 3rem 0">
        <Paragraph>
          <h3>究竟每個月可以慳幾多錢？</h3>
          <p>如你每週入油量為300公升，你可即時節省HK$810！如你每月入油量為1,000公升，你將節省HK$2,700！</p>
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage to="/GLH" bg={require('../PageHome/images/glh.jpg')}>
          全新 Uber 服務中心
        </SuggestedPage>
        <SuggestedPage
          to="/24-hour-hotline"
          bg={require('../PageHome/images/24-hour-hotline.jpg')}
        >
          24 小時司機夥伴支援熱線
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageOilCard;
