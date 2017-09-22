// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <html lang="zh-Hant-HK" />
    <title>Uber｜123日改變</title>
    <meta
      name="keywords"
      content="Uber, cab, taxi, Grab, ride hailing, ride sharing, part-time driver, Didi, Uber 香港, 司機, Uber 司機, Uber 月入, 車 外快, 的的, 快的, 優步, 電召"
    />
    <meta
      name="description"
      content="由本月起我們將會因應司機夥伴的實際需求，作出「123日改變」。從提高行程最低車資，到特別為司機夥伴而設的支援服務，我們都會逐步作出改善，希望你可以安心享受駕駛時刻。"
    />
    <meta name="twitter:site" content="@Uber" />
    <meta name="twitter:card" content="app" />
    <meta
      name="twitter:description"
      content="由本月起我們將會因應司機夥伴的實際需求，作出「123日改變」。從提高行程最低車資，到特別為司機夥伴而設的支援服務，我們都會逐步作出改善，希望你可以安心享受駕駛時刻。"
    />
    <meta name="twitter:app:id:iphone" content="368677368" />
    <meta name="twitter:app:id:ipad" content="368677368" />
    <meta name="twitter:app:id:googleplay" content="com.ubercab" />
    <meta
      name="twitter:image"
      content="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.0/d1a3f4spazzrp4.cloudfront.net/images/seo-image-30cc8ae4a5.jpg"
    />
    <meta property="fb:app_id" content="277064115737714" />
    <meta property="og:title" content="見證 Uber 「123日改變」" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="由本月起我們將會因應司機夥伴的實際需求，作出「123日改變」。從提高行程最低車資，到特別為司機夥伴而設的支援服務，我們都會逐步作出改善，希望你可以安心享受駕駛時刻。"
    />
    <meta property="og:locale" content="zh-Hant-HK" />
    <meta property="og:url" content="https://uber123days.hk" />
    <meta property="og:site_name" content="Uber" />
    <meta
      property="og:image"
      content="http://uber123days.hk/facebook-shareimage.jpg"
    />
    <meta
      property="og:image:secure_url"
      content="https://uber123days.hk/facebook-shareimage.jpg"
    />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="5000" />
    <meta property="og:image:height" content="2625" />
    <meta
      property="og:image:alt"
      content="由本月起我們將會因應司機夥伴的實際需求，作出「123日改變」。從提高行程最低車資，到特別為司機夥伴而設的支援服務，我們都會逐步作出改善，希望你可以安心享受駕駛時刻。"
    />
    <meta name="theme-color" content="#fff" />
    <link
      rel="apple-touch-icon"
      href={require('./images/favicons/apple-touch-icon.png')}
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href={require('./images/favicons/apple-touch-icon-76x76.png')}
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href={require('./images/favicons/apple-touch-icon-144x144.png')}
    />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href={require('./images/favicons/apple-touch-icon-192x192.png')}
    />
    <link
      rel="apple-touch-icon"
      sizes="512x512"
      href={require('./images/favicons/apple-touch-icon-512x512.png')}
    />
    <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://uber123days.hk",
        "logo": "https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.0/d1a3f4spazzrp4.cloudfront.net/images/uber-serp-logo-f6e7549c89.jpg"
      }`}
    </script>
    <link rel="shortcut icon" href={require('./images/favicon.ico')} />
  </Helmet>
);

export default Head;
