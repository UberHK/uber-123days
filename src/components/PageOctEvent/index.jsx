// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Lightbox from 'react-images';

import Media from '../../util/MediaUtil';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import SuggestedPage from '../PagePost/SuggestedPage';

const Col4 = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  width: 100%;
  padding: 0 0.25rem;
  box-sizing: border-box;
  ${Media.fromWidth('LG').css`
    width: 50%;
  `};
  ${Media.fromWidth('XL').css`
    width: 33.33333%;
  `};
  img {
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
`;

const A = styled.a`
  display: inline-block;
  background-color: #e7421f;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const gallerySources = [
  { src: require('./images/dinner_1.jpg'), caption: '' },
  { src: require('./images/dinner_2.jpg'), caption: '' },
  { src: require('./images/dinner_3.jpg'), caption: '' }
];

class PageOctEvent extends React.Component {
  state = { current: 0, lightboxIsOpen: false };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState(() => ({ current: index, lightboxIsOpen: true }));
  };

  closeLightbox = () => {
    this.setState(() => ({ current: 0, lightboxIsOpen: false }));
  };

  nextLightbox = () => {
    if (this.state.current >= 2) return;
    this.setState(() => ({ current: this.state.current + 1 }));
  };

  prevLightbox = () => {
    if (this.state.current <= 0) return;
    this.setState(() => ({ current: this.state.current - 1 }));
  };

  render() {
    return (
      <PagePost
        back="#sept-event"
        title="特別活動"
        introduction="為了讓司機夥伴享受共聚天倫的時刻，Uber 將於十月中為司機夥伴舉行親友同樂嘉年華（活動內容包括釣蝦、釣魚、燒烤、釣海鮮大比拼），誠邀司機夥伴攜同家人、朋友出席！"
      >
        <FullWidth>
          <Container padding="3rem 3rem 1rem">
            <PrimaryImage src={require('./images/popcorn.png')} />
            <Paragraph>
              <h3>活動詳情</h3>
              <p>
                <b>主題</b>：Uber 司機夥伴親子同樂日<br />
                <b>日期及時間</b>：十月十五日（星期日）下午二時至下午五時<br />
                <b>地點</b>：天水圍（詳細地址將在電郵內發放）<br />
                <b>活動內容</b>：燒烤及釣海鮮大比拼（勝出的司機夥伴可獲豐富禮品！）
              </p>
              <p style={{ fontSize: '1rem' }}>
                * 歡迎所有司機夥伴報名，從未參加 Uber 活動的優秀司機夥伴優先。
              </p>
              <p>活動費用全免！歡迎司機夥伴攜同家人出席！</p>
              <A
                target="_blank"
                rel="noopener noreferrer"
                href="http://t.uber.com/ubercarnival"
              >
                立即報名
              </A>
            </Paragraph>
            <Paragraph>
              <h3>活動回顧 - Uber 司機夥伴慶祝晚宴暨「123日改變」啟動儀式</h3>
              {gallerySources.map((image, i) => (
                <Col4 key={i}>
                  <img
                    alt={image.caption}
                    onClick={e => this.openLightbox(i, e)}
                    src={image.src}
                  />
                  {image.caption}
                </Col4>
              ))}
              <Lightbox
                currentImage={this.state.current}
                images={gallerySources}
                isOpen={this.state.lightboxIsOpen}
                onClose={this.closeLightbox}
                onClickNext={this.nextLightbox}
                onClickPrev={this.prevLightbox}
                backdropClosesModal
              />
              <p>
                當晚，首先由 Uber
                香港區總經理佘雋知歡迎接近二百位出席的司機夥伴及其親友，並頒發八月「每月之星」獎項。除了享用晚宴外，我們為每人預備了豐富禮品及抽獎環節，大家都滿載而歸！再次感謝當晚積極參與的司機夥伴！
              </p>
            </Paragraph>
          </Container>
          <Container padding="3rem">
            <h3>其他相關活動</h3>
            <SuggestedPage
              to="/fuel-card"
              bg={require('../PageHome/images/fuel-card.png')}
            >
              Shell 油咭優惠升級
            </SuggestedPage>
            <SuggestedPage
              to="/momentum"
              bg={require('../PageHome/images/momentum.png')}
            >
              優御會
            </SuggestedPage>
          </Container>
        </FullWidth>
      </PagePost>
    );
  }
}

export default PageOctEvent;
