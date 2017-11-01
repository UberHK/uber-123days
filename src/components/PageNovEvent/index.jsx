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

const gallerySources1 = [
  { src: require('./images/photo_1.jpg'), caption: '' },
  { src: require('./images/photo_2.jpg'), caption: '' },
  { src: require('./images/photo_3.jpg'), caption: '' }
];

const gallerySources2 = [
  { src: require('./images/photo_4.jpg'), caption: '' },
  { src: require('./images/photo_5.jpg'), caption: '' }
];

class PageNovEvent extends React.Component {
  state = { current: 0, lightboxIsOpen: false };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState(() => ({ current: index, lightboxIsOpen: true }));
  };

  closeLightbox = () => {
    this.setState(() => ({ current: 0, lightboxIsOpen: false }));
  };

  nextLightbox = () => {
    if (this.state.current >= 4) return;
    this.setState(() => ({ current: this.state.current + 1 }));
  };

  prevLightbox = () => {
    if (this.state.current <= 0) return;
    this.setState(() => ({ current: this.state.current - 1 }));
  };

  render() {
    return (
      <PagePost
        back="#nov-event"
        title="特別活動"
        introduction="Uber 包場請你免費睇《正義聯盟》！成功報名的司機夥伴*
    可於11月19日（星期日）帶同最多2位親友觀賞這部萬眾期待的DC鉅作。我們亦準備了爆谷、飲品及免費泊車**，讓你盡興。"
      >
        <FullWidth>
          <Container padding="3rem 3rem 1rem">
            <PrimaryImage src={require('./images/nov-event.png')} />
            <Paragraph style={{ marginBottom: 0 }}>
              日期及時間：11月19日（星期日）下午三時至六時
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              地點： 九龍灣 （詳細地址將通過確認電郵通知）
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>活動內容：</Paragraph>
            <ul>
              <Li>十月「每月之星」頒獎禮</Li>
              <Li>免費電影戲票</Li>
              <Li>免費爆谷及飲品</Li>
              <Li>免費泊車（多達4小時）</Li>
            </ul>
            <br />
            <p>*歡迎所有司機夥伴報名，十月「每月之星」及從未參加 Uber 活動的優秀司機夥伴優先。</p>
            <p>**每張戲票持有人可獲贈2小時免費泊車，每架車輛則可享最多4小時免費泊車。</p>
            <br />
            <Paragraph>
              <A
                target="_blank"
                rel="noopener noreferrer"
                href="http://t.uber.com/novmovie"
              >
                立即報名
              </A>
            </Paragraph>
            <img style={{ width: 320 }} src={require('./images/justice.png')} />
            <br />
            <br />
            <br />
            <br />
            <h3>活動回顧 - 同樂嘉年華</h3>
            <Paragraph>
              十月中，近 150
              位司機夥伴及親友出席了同樂嘉年華，一同度過愉快的下午。除了享用豐富的燒烤美食外，當日勝出釣海鮮大比拼的司機夥伴及親友更獲得額外禮品，場面非常熱鬧！
            </Paragraph>
            {gallerySources1.map((image, i) => (
              <Col4 key={i}>
                <img
                  alt={image.caption}
                  onClick={e => this.openLightbox(i, e)}
                  src={image.src}
                />
                {image.caption}
              </Col4>
            ))}
            <h3>活動回顧 - Mooncake Event</h3>
            <Paragraph>
              中秋前夕及當日，我們邀請了近100位司機夥伴親臨 Uber
              服務中心，與我們一齊共度中秋佳節。當日出席的參加者除了獲得精美月餅外，更參加了中秋猜燈謎遊戲贏取豐富獎品。司機夥伴都十分投入，場面洋溢著濃厚的節日氣氛。
            </Paragraph>
            {gallerySources2.map((image, i) => (
              <Col4 key={i}>
                <img
                  alt={image.caption}
                  onClick={e => this.openLightbox(i + 3, e)}
                  src={image.src}
                />
                {image.caption}
              </Col4>
            ))}
            <Lightbox
              currentImage={this.state.current}
              images={[...gallerySources1, ...gallerySources2]}
              isOpen={this.state.lightboxIsOpen}
              onClose={this.closeLightbox}
              onClickNext={this.nextLightbox}
              onClickPrev={this.prevLightbox}
              backdropClosesModal
            />
          </Container>
          <Container padding="3rem">
            <h3>其他相關活動</h3>
            <SuggestedPage
              to="/carcare-day"
              bg={require('../PageHome/images/carcare-day.png')}
            >
              汽車試駕及保養日
            </SuggestedPage>
            <SuggestedPage
              to="/monthly-star"
              bg={require('../PageHome/images/monthly-star-3.jpg')}
            >
              每月之星
            </SuggestedPage>
          </Container>
        </FullWidth>
      </PagePost>
    );
  }
}

export default PageNovEvent;
