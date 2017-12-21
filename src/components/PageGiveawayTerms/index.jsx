// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';

const Li = styled.li`
  line-height: 2;
  font-size: 1.125rem;
  padding-left: 1.5rem;
  text-indent: -1.5rem;
  &:before {
    content: counters(item, '.') '. ';
    counter-increment: item;
  }
`;

const Ol = styled.ol`
  counter-reset: item;
  list-style-type: none;
  padding: 0rem;
`;

const PageGiveawayTerms = () => (
  <PagePost
    back="freetrip-giveaway"
    title="聖誕新年星級行程大賞"
    introduction="你給乘客的星級行程，換 Uber 送你的星級旅程。"
  >
    <FullWidth>
      <Container padding="3rem 3rem 1rem">
        <h3>聖誕新年星級行程大賞活動細則及條款</h3>
        <Ol>
          <Li>活動期由2017年12月11日至2017年12月31日（包括首尾兩日）。 </Li>
          <Li>
            活動期間，每日在凌晨四時至翌日凌晨四時完成最多五星 Uber
            行程的一名合資格司機夥伴（已經成功登記，並成功上線接單者）將會贏取獎品。
            <Ol>
              <Li>
                每名司機夥伴只能贏取獎品一次，倘若已贏取獎品的司機夥伴在另一日再次完成最多五星
                Uber 行程，獎項將會順延頒發給排名第二的司機夥伴。
              </Li>
              <Li>
                所有參與活動的司機夥伴需遵循 Uber
                香港平台使用守則，若有違反規定的行為，將會被取消參與資格。
              </Li>
            </Ol>
          </Li>
          <Li>
            是次活動之獎品為價值 HK$8,000 Expedia智遊網優惠券 （共21名）。
          </Li>
          <Li>
            得獎者將於五個工作天內透過電話／電郵／App 內訊息收到得獎通知。
          </Li>
          <Li>
            每日只會送出一份獎品，如果當日有多於一名司機夥伴完成最多五星行程，當日獲得較多勳章者，或累積評分較高者將得獎。（前者作優先考慮）
          </Li>
          <Li>
            得獎者須於2018年1月2日至1月31日期間，攜同身分證正本親身到 Uber
            服務中心領獎，以及拍照作本公司紀錄及宣傳之用。Uber
            亦有權在活動結束後聯絡得獎者，訪問得獎感受，作宣傳之用。若得獎者未能於2018年1月31日或以前領獎，將會當作自動放棄領獎處理。
          </Li>
          <Li>
            此優惠券只適用於預定套裝行程，未包括任何稅項、適用收費及附加費，其他有關優惠券條款請參閱以下有關「Expedia智遊網優惠券使用條款」部分。
          </Li>
          <Li>
            得獎者所獲的獎品不得要求兌換成現金、折讓、更換或任何調整事項，而已領取之獎品亦不可要求退換。獎品如有遺失，將不獲補發。
          </Li>
          <Li>
            得獎者於 Expedia 智遊網旅程期間可能遇上的風險或意外，
            或任何有關的額外費用，將由得獎者全權負責。
          </Li>
          <Li>
            得獎者領取獎品後，如有任何爭議，Expedia智遊網將擁有最終決定權。
          </Li>
          <Li>本活動最終決定權由 Uber 所有。</Li>
        </Ol>
        <br />
        <br />
        <h3>加送 iPhone X 活動附加條款及細則</h3>
        <Ol>
          <Li>活動期為2017年12月24日及2017年12月31日。</Li>
          <Li>
            於12月24日凌晨四時至翌日凌晨四時完成最多五星 Uber
            行程的首三名合資格司機夥伴將會贏取 iPhone X。而於此期間完成最多五星
            Uber 行程的第四名司機夥伴將獲得 HK$8,000 Expedia 智遊網優惠券 。
          </Li>
          <Li>
            於12月31日凌晨四時至翌日凌晨四時完成最多五星 Uber
            行程的首七名合資格司機夥伴將會贏取 iPhone X。而於此期間完成最多五星
            Uber 行程的第八名司機夥伴將獲得 HK$8,000 Expedia 智遊網優惠券。
          </Li>
          <Li>
            每名司機夥伴只能贏取獎品一次 （包括 iPhone X 及
            旅行優惠券），倘若已贏取獎品的司機夥伴在另一日再次完成最多五星 Uber
            行程，獎項將會順延頒發給排名下一名司機夥伴。
          </Li>
          <Li>是次加送活動之獎品為 iPhone X 64GB。</Li>
          <Li>
            12月24日只會送出三部 iPhone X 以及一套 HK$8,000 Expedia
            智遊網優惠券，12月31日只會送出七部 iPhone X 以及一套 HK$8,000
            Expedia
            智遊網優惠券，如果12月24日有多於四名或12月31日有多於八名司機夥伴完成最多五星行程，當日獲得較多勳章者，或累積評分較高者將得獎。（前者作優先考慮）
          </Li>
        </Ol>
        <br />
        <br />
        <h3>Expedia智遊網優惠券使用條款</h3>
        <h4>條款與細則</h4>
        <h4>A ─ 重要事項</h4>
        <p>
          符合資格預訂：本優惠代碼折扣 (「優惠券」) 僅在 www.expedia.com.hk
          中進行網上預訂機票 + 酒店套票，並在網上預付款項時適用
          (須受下列條款及細則所列限制)。
        </p>
        <p>優惠券價值：HK$8000 折扣 (「折扣」)。 </p>
        <p>
          兌換期限：香港時間 2018 年 1 月 1日凌晨 12:01 至香港時間2018年 9月 31
          日晚上 11:59
        </p>
        <p>
          住宿期限：住宿日期必須在2018年 1月 1日至2018年 12月 31 日
          (包含首末兩天) 之間 (「住宿期限」)。
        </p>
        <p>「最低消費額」：</p>
        <p>如何使用您的優惠券</p>
        <ul>
          <li>
            在預訂流程中，於付款頁面有「輸入折扣券代碼」連結位置處，輸入優惠代碼；
          </li>
          <li>
            上方相關欄位有指定的優惠代碼，輸入該代碼然後按一下「使用折扣券」按鈕。如果預訂符合優惠資格，就會針對預訂的住房價格
            (尚未加計任何稅金、應繳稅項、相關費用或附加費用) 實施折扣。
          </li>
        </ul>
        <h4>B ─ 條款及細則</h4>
        <Ol>
          <Li>
            優惠券除了須符合上述重要事項條款及細則中所述之限制資格外，亦適用於在www.expedia.com.hk(「網站」)網上預訂的機票
            +
            酒店套票。優惠券僅可用於預先付款的預訂，不可於目的地付款時抵用預訂價格。
          </Li>
          <Li>
            本優惠券僅適用於預訂符合資格的酒店。「參與計劃的酒店」是指標示有「Expedia
            優惠價」酒店，且未列入例外名單者，參見
            https://www.expedia.com.hk/p/corporate/coupon-exclude-hotels
            (「例外名單」)，且須於
            Expedia訂房之時直接於網上付款。例外名單得不定期予以更新，恕不提前通知。
          </Li>
          <Li>
            如您符合「最低消費額」規定，即有資格享有優惠券適用折扣
            ，可從預訂住房的價格
            (未含任何稅金、應繳稅項、相關費用或額外支出之價格) 中，扣除該折扣。
          </Li>
          <Li>
            優惠券無法折抵稅金、應繳稅項、提供者費用、取消費或變更費/罰金、行政手續費或其他雜支，前述費用係由客戶全額負擔。
          </Li>
          <Li>
            優惠券僅於兌換期限內有效，且限於在網站上於住宿期間內進行網上預訂，方可獲折扣。如在
            Expedia 任何其他網站預訂者，恕不適用優惠券。
          </Li>
          <Li>
            適用一般預訂的條款及細則 (參閱
            https://www.expedia.com.hk/p/corporate/termsofuse)，且所有預訂均視乎供應情況而定。
          </Li>
          <Li>
            每筆交易只可使用一張優惠券。預訂多個房間時，只有單一客房可享折扣。
          </Li>
          <Li>
            優惠券不得與其他優惠券、促銷活動或特別優惠同時使用或合併使用。
          </Li>
          <Li>
            優惠券不得用於任何先前預訂之訂房。一經用於合資格的預訂，即視為「已兌換」。優惠券不具任何現金價值，亦不會提供任何退款或其他現金替代方案。優惠券不帶任何剩餘現金價值，如購買金額低於折扣金額，亦不會發放任何購買金額。優惠券不得重複使用，即使您更改或取消預訂亦然。
          </Li>
          <Li>
            優惠券於法令明文禁止之情況下，視同無效，且僅限香港年滿 18
            歲之合法居民使用。
          </Li>
          <Li>
            Expedia 集團公司員工，或任何與本優惠活動有業務關係的其他人士
            (包括但不限於旅行社聯盟計劃合作夥伴) 均不得使用此優惠券。
          </Li>
          <Li>
            嚴禁不當使用優惠券，包括但不限於公開發行或販售優惠券，違者將遭取消優惠券效用，且可能會構成涉嫌詐欺。
          </Li>
          <Li>
            此優惠券不得轉讓或出售。由不法渠道取得，或以任何方式毀壞、更改、複製、偽造、破壞、操縱或篡改的優惠券將被視為無效。
          </Li>
          <Li>
            若 Expedia 發現或有理由懷疑 (經 Expedia 合理分析) 顧客：(a)
            使用折扣券在網站上完成多筆預訂，有意另行轉售任何項住宿服務；或 (b)
            從事其他有損本項優惠之公平性、完整性或正當性之行為。Expedia
            可依其全權裁定，不經任何理由說明，逕自取消該客戶使用優惠券下的所有預訂。
          </Li>
          <Li>
            為免生疑惑，此優惠券僅供顧客直接透過本網站預訂時使用，不可透過或由第三方旅行社代理或中介使用。
          </Li>
          <Li>
            Expedia
            保留隨時修改此優惠券之使用條款或取消此優惠券之權利。就本優惠一切相關事宜，Expedia
            享有最終決定權。
          </Li>
          <Li>
            優惠券之條款及細則如明文所訂，不得經由未授權人士代為變更，包括
            Expedia
            員工在內。本條款及細則係受新加坡法律所規範，且依新加坡法律為解釋依據。
          </Li>
          <Li>英文版本與其他語言譯本如有不一致之處，應以英文版本為準。</Li>
          <Li>
            優惠券由 AAE Travel Pte Ltd (公司登記編號：201113337M)
            提供，該公司係依據新加坡法律合法成立 (「Expedia」)，登記地址為 8
            Marina Boulevard #05-02, Marina Bay Financial Centre Tower 1,
            Singapore 018981。
          </Li>
        </Ol>
        <br />
        <br />
        <h3>Expedia Coupon Terms and Conditions</h3>
        <h4>A - KEY POINTS</h4>
        <p>
          Qualifying Bookings: This coupon code discount (“Coupon”) applies only
          to flight+hotel package bookings made online at www.expedia.com.hk
          that are pre-paid at the time of booking (subject to the restrictions
          set out in the terms and conditions below).
        </p>
        <p>Coupon value: HK$8000</p>
        <p>
          Minimum Spend: No minimum spend. (minimum spend is the price of the
          travel reservation excluding any taxes, tax recovery charges, fees or
          additional costs) (“Minimum Spend”). This spend must take place in one
          transaction.
        </p>
        <p>
          Redemption Period: 12.01am HKT, 1 Jan 2018 to 11:59pm HKT, 30 Sept
          2018 (“Redemption Period”).
        </p>
        <p>
          Travel Period: The travel dates must be between 1 Jan 2018 and 31 Dec
          2018 (inclusive) (“Travel Period”).
        </p>
        <p>How to use your Coupon</p>
        <ul>
          <li>
            During the booking process, on the payment page you will see the
            link “Enter a voucher code” where you can enter the coupon code.
          </li>
          <li>
            Enter the coupon code specified above in the relevant field and then
            click the “Apply Voucher” button. If your booking is eligible, the
            applicable discount will be subtracted from the price of the travel
            reservation before the application of any taxes, tax recovery
            charges, applicable fees or additional costs.
          </li>
        </ul>
        <h4>B - TERMS AND CONDITIONS</h4>
        <Ol>
          <Li>
            Subject to the restrictions set out in these terms and conditions
            and compliance with the Key Points above, the Coupon may be applied
            to flight+hotel package bookings made online with www.expedia.com.hk
            (“Website”). This Coupon may not be used for other package bookings
            (e.g. flight + hotel + car packages or packages offered by third
            parties), hotel-only bookings, or flight-only bookings. The Coupon
            can only be used for pre-pay bookings and cannot be redeemed against
            bookings which are paid at the destination.
          </Li>
          <Li>
            The Coupon cannot be redeemed against bookings which are not for
            Eligible Hotels. An “Eligible Hotel” refers to a hotel labelled
            “Expedia Rate” which is not on the exclusion list in
            https://www.expedia.com.hk/p/corporate/coupon-exclude-hotels
            (”Exclusion List”) and for which payment is made at the time of
            booking to Expedia. The Exclusion List may be amended from time to
            time without prior notice.
          </Li>
          <Li>
            Provided that you spend the Minimum Spend stipulated above, the
            Coupon entitles you to the amount off the price of the relevant
            travel reservation before the application of any taxes, tax recovery
            charges, applicable fees or additional costs.
          </Li>
          <Li>
            The Coupon cannot be redeemed against taxes, tax recovery charges,
            supplier fees, cancellation or change fees/penalties, administrative
            fees or other miscellaneous charges, which are the sole
            responsibility of the customer.
          </Li>
          <Li>
            The Coupon is valid only for the Redemption Period, for travel
            during the Travel Period, when booked on the Website only, and not
            on any other Expedia sites.
          </Li>
          <Li>
            Usual booking terms and conditions apply (see
            http://www.expedia.com.hk/p/corporate/termsofuse) and all bookings
            are subject to availability.
          </Li>
          <Li>
            Only one Coupon per transaction may be used. In a multiple-room
            booking, the Discount will be applied to only one room.
          </Li>
          <Li>
            The Coupon may not be used or combined with other coupons,
            promotions or special offers.
          </Li>
          <Li>
            The Coupon cannot be used for any booking previously made. It will
            be deemed fully redeemed once a qualifying booking has been made.
            The Coupon has no cash value and no refunds or cash alternative will
            be offered. There is no residual value and no credit will be issued
            if the purchase amount is less than the Discount. The Coupon may not
            be re-used, even in the event that you change or cancel the booking.
          </Li>
          <Li>
            The Coupon is void where prohibited by law and may only be used by
            legal residents of Hong Kong aged 18 and over.
          </Li>
          <Li>
            The Coupon may not be used by employees of Expedia group companies
            or any other person professionally connected with this offer
            including, without limitation, travel agency affiliate program
            partners.
          </Li>
          <Li>
            Improper use of the Coupon by you including, but not limited to,
            publication or selling of the Coupon is prohibited, will result in
            the voiding of the Coupon, and may constitute fraud.
          </Li>
          <Li>
            This Coupon may not be transferred or sold. Coupon obtained through
            unauthorized channels, mutilated, altered, copied, forged, damaged,
            manipulated, or tampered with in any way will be deemed void.
          </Li>
          <Li>
            If Expedia becomes aware, or has reason to suspect (in Expedia’s
            reasonable opinion), that a customer: (a) made multiple bookings on
            the Website using the Coupon with a view to re-selling any
            accommodation; or (b) otherwise engaged in conduct which impacts on
            the fairness, integrity or proper conduct of this offer, Expedia
            may, in its absolute discretion, cancel all bookings made by the
            customer using the Coupon without giving any reasons thereon.
          </Li>
          <Li>
            For avoidance of doubt, this Coupon can only be used by a customer
            making a booking directly on the Website, and cannot be used through
            or by a third party travel agent or intermediary.
          </Li>
          <Li>
            Expedia reserves the right to vary conditions of use of the Coupon
            or to withdraw the Coupon at any time. Expedia's decision is final
            in all matters relating to this offer.
          </Li>
          <Li>
            Terms and conditions of this Coupon are as written and cannot be
            changed by any representation of any unauthorized person, including
            employees of Expedia. These terms and conditions shall be governed
            by and construed in accordance with the laws of Singapore.
          </Li>
          <Li>
            In the event of inconsistency between the English language version
            and any other language translations, the English language version
            shall prevail.
          </Li>
          <Li>
            This Coupon is offered by AAE Travel Pte Ltd (Company Registration
            Number 201113337M), a corporation incorporated under the laws of
            Singapore (“Expedia”) having its registered office at 8 Marina
            Boulevard #05-02, Marina Bay Financial Centre Tower 1, Singapore
            018981.
          </Li>
        </Ol>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </FullWidth>
  </PagePost>
);

export default PageGiveawayTerms;
