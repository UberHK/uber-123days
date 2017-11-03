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

const PageVenue = () => (
  <PagePost
    back="#venue"
    title="建議上車點"
    introduction="為方便你接載乘客，我們正陸續在各大型商場及熱門地方添加建議上車點，乘客可在叫車時直接到指定上車點與你會面。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/venue.png')} />
        <Paragraph>
          香港的交通狀況非常繁忙，要在大型商場及熱門地點尋找合適上車地點並不容易，GPS 全球定位系統在高樓林立的市區亦不一定時刻準確。
        </Paragraph>
        <Paragraph>
          因此，我們正陸續在各大型商場及熱門上落客地方添加建議上車點，乘客可在叫車時直接到系統指定的上車點與你會面，方便你更快捷準確接載乘客。期望司機夥伴接載乘客的體驗更加順暢，亦減少乘客上車的不便。
        </Paragraph>
        <Paragraph>
          你亦可以在<a
            target="_blank"
            rel="noopener noreferrer"
            href="http://t.uber.com/hkpickupform"
          >
            此表格
          </a>提供你寶貴的建議，助我們一臂之力，改善乘客及司機夥伴的體驗。
        </Paragraph>
        <Paragraph>
          <img
            style={{ width: 320 }}
            src={require('./images/screenshot.gif')}
          />
        </Paragraph>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/nov-event"
          bg={require('../PageHome/images/nov-event.png')}
        >
          特別活動
        </SuggestedPage>
        <SuggestedPage
          to="/carcare-day"
          bg={require('../PageHome/images/carcare-day.png')}
        >
          汽車試駕及保養日
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageVenue;
