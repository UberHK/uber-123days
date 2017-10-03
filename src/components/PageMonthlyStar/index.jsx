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
import NormalImage from '../PagePost/NormalImage';
import NormalImageRight from '../PagePost/NormalImageRight';
import SuggestedPage from '../PagePost/SuggestedPage';

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

const PageMonthlyStar = () => (
  <PagePost
    back="#monthly-star"
    title="每月之星"
    introduction="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/monthly-star-2.png')}>
          <p>
            Uber 能廣受香港人歡迎，全因有你和各位司機夥伴一直提供優質可靠的共乘服務。為表揚平台上優秀的司機夥伴， 並鼓勵各位師兄師姐與
            Uber 一起進步，由九月到十一月，將會有共15位司機夥伴成為 Uber「每月之星」及特別獎賞！
          </p>
        </PrimaryImage>
      </Container>
      <Container padding="0 3rem 3rem">
        <Paragraph>
          每月之星獎項包括：
          <ol>
            <li>五星大賞 - 完成最多5星行程的司機夥伴</li>
            <li>乘客之選 - 平均評分最高的司機夥伴</li>
            <li>榮譽勳章 - 獲得最多乘客勳章的司機夥伴</li>
            <li>熱心之最 - 接單率最高的司機夥伴</li>
            <li>關懷備至 - 完成最多關懷優步行程的司機夥伴</li>
          </ol>
        </Paragraph>
        <p>
          *條款及細則：
          九月份有機會獲獎（即八月達到指定條件）的司機夥伴會受邀請出席九月初的慶祝晚宴暨「123日改變」啟動儀式。司機夥伴需成功登記及出席晚宴去參與「每月之星」活動。十月及十一月的「每月之星」獎項（過去一個月達到指定條件）將另作安排。活動最終解釋和決定權歸
          Uber 所有。
        </p>
      </Container>
      <Container padding="1rem 3rem" bgColor="#fdfdfd">
        <h2>八月「每月之星」</h2>
        <Paragraph>
          我們早前在 Uber 司機夥伴慶祝晚宴暨「123日改變」啟動儀式上頒發了八月「每月之星」，每位得獎司機夥伴均獲贈精美獎座及價值
          HK$3,000 的 Shell 油咭，以答謝他們的超卓表現。我們再次感謝各位司機夥伴為共乘交通出一分力。
        </Paragraph>
        <h3>得獎名單</h3>
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
        <h3>得獎司機夥伴分享</h3>
        <Paragraph>想成為下月的「每月之星」？立即觀看其中兩位八月得獎司機夥伴的訪問，了解他們的獲獎心得和駕駛小故事。</Paragraph>
        <NormalImage src={require('./images/aug-star-man.png')}>
          <h4>「榮譽勳章」得主 － 阿文</h4>
          <p>
            阿文成為 Uber 司機夥伴已有一年半時間，他十分喜歡 Uber 的概念，更表示駕駛 Uber
            是他的夢想，能滿足自己的興趣和賺取收入之餘，彈性上線時間亦方便他安排時間照顧家人。他指自己從未試過獲獎，所以很高興獲得乘客的認同。
          </p>
          <p>
            被問到獲獎的心得，他認為自己以往作為酒店及私人司機的經驗有助他更易了解乘客的心態，例如他觀察到有些乘客比較健談，就會主動跟他們聊天。最後，他透露了一些獲取高評分的小貼士，他認為最重要是在乘客上車時打招呼和對路面情況熟悉。另外，Uber
            不時會有來自世界各地的乘客，所以基本的英語對答技巧也是不可或缺的。
          </p>
        </NormalImage>
        <NormalImageRight src={require('./images/aug-star-ken.png')}>
          <h4>「關懷備至」得主 － Ken</h4>
          <p>
            Ken 當初經朋友介紹加入 Uber，雖然只是短短半年，但已完成超過三千次行程。被問及參與「關懷優步」培訓的原因，他表示希望藉此更投入
            Uber 的工作，同時增加收入。
          </p>
          <p>
            他分享了其中兩次「關懷優步」行程的經歷，其中一次他接載一位初次使用「關懷優步」的視障人士，該乘客問了很多相關問題，下車時更主動向他索取聯絡資料；另一次他接載一位打石膏的外籍人士，雖然言語不通，但他都盡力嘗試了解乘客的需要，協助乘客上下車並順利抵達目的地。這些經歷看似微不足道，但乘客的認同為他帶來滿足感，促使他繼續成為「關懷優步」司機夥伴的一份子，幫助有需要人士。
          </p>
        </NormalImageRight>
      </Container>
      <Container padding="3rem">
        <h3>其他相關活動</h3>
        <SuggestedPage
          to="/airport"
          bg={require('../PageHome/images/airport.png')}
        >
          機場前往市區補貼
        </SuggestedPage>
        <SuggestedPage
          to="/lost-and-found"
          bg={require('../PageHome/images/lost_and_found.png')}
        >
          路不拾遺獎勵計劃
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMonthlyStar;
