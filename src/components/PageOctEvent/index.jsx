// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const PageOctEvent = () => (
  <PagePost
    back="#sept-event"
    title="特別活動"
    introduction="九月初，我們會邀請一班優秀司機夥伴及家人參加晚宴及抽獎活動。之後我們會繼續舉辦不同活動，敬請期待！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/cheer.jpg')}>
          <p>
            為了讓司機夥伴享受共聚天倫的時刻，Uber
            將於十月中為司機夥伴*舉行親子嘉年華（活動內容包括釣蝦、釣魚、燒烤、釣海鮮大比拼），歡迎司機夥伴攜同家人出席。
          </p>
          <p>* 2017年加入的優秀司機夥伴優先</p>
        </PrimaryImage>
        <Paragraph>
          <h3>活動詳情</h3>
          <p>
            <b>主題</b>：Uber 司機夥伴親子同樂日<br />
            <b>日期及時間</b>：十月十五日（星期日）下午二時至下午五時<br />
            <b>地點</b>：天水圍（詳細地址將在電郵內發放）<br />
            <b>活動內容</b>：燒烤及釣海鮮大比拼（勝出的司機夥伴可獲豐富禮品！）
          </p>
          <p>活動費用全免！歡迎司機夥伴攜同家人出席！</p>
        </Paragraph>
        <Paragraph>
          <h3>活動回顧 - Uber 司機夥伴慶祝晚宴暨「123日改變」啟動儀式</h3>
          <p>
            當晚，首先由 Uber
            香港區總經理佘雋知歡迎接近二百位出席的司機夥伴及其親友，並頒發八月「每月之星」獎項。除了享用晚宴外，我們為每人預備了豐富禮品及抽獎環節，大家都滿載而歸！再次感謝當晚積極參與的司機夥伴！
          </p>
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

export default PageOctEvent;
