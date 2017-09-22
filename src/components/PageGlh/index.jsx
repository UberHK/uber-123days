// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import ReactPlayer from 'react-player';
import Lightbox from 'react-images';

import Media from '../../util/MediaUtil';
import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import SubHeading from '../PagePost/SubHeading';
import Paragraph from '../PagePost/Paragraph';
import SuggestedPage from '../PagePost/SuggestedPage';
import ReactPreview from './ReactPreview';

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

const ReactPlayerContainer = styled.div`
  display: none;
  ${Media.fromWidth('MD').css`
    display: block;
  `};
`;

const gallerySources = [
  { src: require('./images/detail2.jpg'), caption: '司機夥伴帳戶登記' },
  { src: require('./images/stock1.png'), caption: '預約一對一支援服務及優御會禮品換領' },
  { src: require('./images/stock3.png'), caption: '司機夥伴上線教學及座談會' },
  { src: require('./images/detail1.jpg'), caption: 'UberEATS 帳戶服務' },
  { src: require('./images/detail3.jpg'), caption: 'Uber 車城租車服務' },
  { src: require('./images/stock2.png'), caption: '失物認領服務' }
];

export default class componentName extends React.Component {
  state = { current: 0, lightboxIsOpen: false };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState(() => ({ current: index, lightboxIsOpen: true }));
  };

  closeLightbox = () => {
    this.setState(() => ({ current: 0, lightboxIsOpen: false }));
  };

  nextLightbox = () => {
    if (this.state.current >= 5) return;
    this.setState(() => ({ current: this.state.current + 1 }));
  };

  prevLightbox = () => {
    if (this.state.current <= 0) return;
    this.setState(() => ({ current: this.state.current - 1 }));
  };

  render() {
    return (
      <PagePost
        back="#glh"
        title="全新 Uber 服務中心"
        introduction="全新服務中心面積是以前的四倍。環境更舒適，人手更充足，可以縮短司機夥伴的等候時間。每週關注小組及一對一的會面亦能確保你獲得更貼心的服務。"
      >
        <FullWidth>
          <Container padding="1rem 3rem 1rem">
            <SubHeading>360度虛擬實境 - 探索 Uber 服務中心</SubHeading>
          </Container>
          <ReactPreview />
          <ReactPlayerContainer>
            <ReactPlayer
              width="100%"
              height={520}
              url="https://www.youtube.com/watch?v=h-GPzQzFOes"
            />
          </ReactPlayerContainer>
          <Container padding="1rem 3rem 1rem">
            <Paragraph>
              地址：長沙灣青山道476號百佳商業中心 (PeakCastle) 22樓<br />
              服務時間：星期一至五 11am - 7pm (公眾假期除外)
            </Paragraph>
          </Container>
          <Container padding="3rem">
            <SubHeading>為你提供的服務包括</SubHeading>
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
          </Container>
          <Lightbox
            currentImage={this.state.current}
            images={gallerySources}
            isOpen={this.state.lightboxIsOpen}
            onClose={this.closeLightbox}
            onClickNext={this.nextLightbox}
            onClickPrev={this.prevLightbox}
            backdropClosesModal
          />
          <Container padding="3rem">
            <h3>其他相關活動</h3>
            <SuggestedPage
              to="/24-hour-hotline"
              bg={require('../PageHome/images/24-hour-hotline.jpg')}
            >
              24 小時司機夥伴支援熱線
            </SuggestedPage>
            <SuggestedPage
              to="/min-fare"
              bg={require('../PageHome/images/min-fare.jpg')}
            >
              最低車資上調
            </SuggestedPage>
          </Container>
        </FullWidth>
      </PagePost>
    );
  }
}
