// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Link from 'gatsby-link';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import Paragraph from '../PagePost/Paragraph';
import PrimaryImage from '../PagePost/PrimaryImage';
import NormalImage from '../PagePost/NormalImage';
import NormalImageRight from '../PagePost/NormalImageRight';
import SuggestedPage from '../PagePost/SuggestedPage';

const A = styled(Link)`
  display: inline-block;
  background-color: #d21618;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
`;

const PageMonthlyStar = () => (
  <PagePost
    back="#monthly-star"
    title="每月之星"
    introduction="每月完成指定條件的司機夥伴將成為 Uber「每月之星」，並獲得神秘禮物！"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <PrimaryImage src={require('./images/monthlystar-44.jpg')} />
        <Paragraph>
          Uber
          能廣受香港人歡迎，全因有你和各位司機夥伴一直提供優質可靠的共乘服務。我們將於12月10日（星期日）的慶祝派對中，嘉許在
          Uber「123日改變」活動期間奪得「每月之星」的最後五位司機夥伴，每位得獎司機夥伴均將獲贈價值
          HK$3,000 的 Shell 油劵及精美獎座，以答謝他們的超卓表現。
        </Paragraph>
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
          *條款及細則：十一月「每月之星」將於12月10日（星期日）的慶祝派對中頒發。司機夥伴需成功登記及出席電影會活動方可獲獎。活動最終解釋和決定權歸
          Uber 所有。
        </p>
        <Paragraph>
          <A to="/monthly-star-awardee">得獎名單</A>
        </Paragraph>
      </Container>
      <Container padding="1rem 3rem" bgColor="#fdfdfd">
        <h3>得獎司機夥伴分享</h3>
        <Paragraph>
          想成為下月的「每月之星」？立即觀看以下幾位得獎司機夥伴的訪問，了解他們的獲獎心得和駕駛小故事。
        </Paragraph>
        <NormalImage src={require('./images/sep_2.png')} isVideo={false}>
          <h4>九月「榮譽勳章」得主 － 林先生</h4>
          <p>
            九月份，林先生完成了29個關懷優步行程。他本著「做得就盡量做」的精神，平均每日協助1個有需要人士出門。
          </p>
          <p>
            林先生表示，關懷優步的乘客通常乘搭短程，來往住所及醫院。他遇過患上小兒麻痹症的乘客，由媽媽陪同選搭
            Uber。兩母子非常感激他，因為 Uber
            較其他交通工具更方便，而且司機夥伴亦較細心，協助他們上落車。林先生笑言，平時沒有機會貢獻社會，能夠照顧行動不便人士或長者令他倍感窩心。
          </p>
        </NormalImage>
        <NormalImageRight src={require('./images/sep_1.png')} isVideo={false}>
          <h4>九月「熱心之最」得主 － 梁先生</h4>
          <p>
            退休人士梁先生在九月份完成了262個行程，接單率高達99.7%，全因「遇上客人是緣分」的信念！敬業樂業的梁先生不論路程長短、天氣惡劣都會盡力接載客人，確保他們安然抵達目的地。
          </p>
          <p>
            年多前，任職的士司機的梁先生已經被乘客稱讚服務優質，更提議他轉到
            Uber 平台做司機夥伴。加入 Uber
            後，他的工作時間較彈性，更不時遇上態度好的乘客，例如喝過酒的乘客會自備膠袋，令他的平台體驗更愉快。
          </p>
        </NormalImageRight>
        <NormalImage src={require('./images/aug-star-man.png')}>
          <h4>八月「榮譽勳章」得主 － 阿文</h4>
          <p>
            阿文成為 Uber 司機夥伴已有一年半時間，他十分喜歡 Uber
            的概念，更表示駕駛 Uber
            是他的夢想，能滿足自己的興趣和賺取收入之餘，彈性上線時間亦方便他安排時間照顧家人。他指自己從未試過獲獎，所以很高興獲得乘客的認同。
          </p>
          <p>
            被問到獲獎的心得，他認為自己以往作為酒店及私人司機的經驗有助他更易了解乘客的心態，例如他觀察到有些乘客比較健談，就會主動跟他們聊天。最後，他透露了一些獲取高評分的小貼士，他認為最重要是在乘客上車時打招呼和對路面情況熟悉。另外，Uber
            不時會有來自世界各地的乘客，所以基本的英語對答技巧也是不可或缺的。
          </p>
        </NormalImage>
        <NormalImageRight src={require('./images/aug-star-ken.png')}>
          <h4>八月「關懷備至」得主 － Ken</h4>
          <p>
            Ken 當初經朋友介紹加入
            Uber，雖然只是短短半年，但已完成超過三千次行程。被問及參與「關懷優步」培訓的原因，他表示希望藉此更投入
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
          to="/freetrip-giveaway"
          bg={require('../PageHome/images/giveaway.jpg')}
        >
          聖誕新年星級行程大賞
        </SuggestedPage>
        <SuggestedPage
          to="/longtrip-bonus"
          bg={require('../PageHome/images/upsidedowntrip.jpg')}
        >
          遠程接單車資保證
        </SuggestedPage>
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageMonthlyStar;
