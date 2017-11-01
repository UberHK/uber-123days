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

const PageTripPreference = () => (
  <PagePost
    back="#trip-preference"
    title="自選兩邊單"
    introduction="不同時間、不同地區對 Uber 的需求亦有不同，想同時接兩邊單善用每分每秒，還是只做 UberBLACK 賺取更高行程收入？現在司機夥伴 App 可隨你喜好選擇接單種類，無任何時間或地區限制，完全由你實時決定。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/trip-preference.png')} />
        <h3>如何操作</h3>
        <ul>
          <Li>在 App 中上方前往 [選項] &gt; 輕按右方齒輪，即可進入 [行程偏好設定]</Li>
          <Li>勾選 UberBLACK* 即可接到 UberBLACK 及七人車的行程預約</Li>
          <Li>勾選 uberX 即可以接到 uberX 的行程預約</Li>
        </ul>
        <Paragraph style={{ marginBottom: 48 }}>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="http://t.uber.com/hktp"
          >
            了解更多
          </A>
        </Paragraph>
        <Paragraph>
          <img
            style={{ width: 320 }}
            src={require('./images/screenshot.png')}
          />
        </Paragraph>
        <p>*請注意，如果你上線的車輛不符合 UberBLACK 或七人車的行程要求，UberBLACK 的選項將不被顯示。</p>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage to="/venue" bg={require('../PageHome/images/venue.png')}>
          建議上車點
        </SuggestedPage>
        <SuggestedPage
          to="/nov-event"
          bg={require('../PageHome/images/nov-event.png')}
        >
          特別活動
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageTripPreference;
