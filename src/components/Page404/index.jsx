// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import PagePost from '../PagePost';
import FullWidth from '../FullWidth';
import Container from '../Container';
import SubHeading from '../PagePost/SubHeading';

const Page404 = () => (
  <PagePost back="" title="對不起！你正在駛往並不存在的頁面" introduction="請勿在這裹停車，並盡快回到安全的主頁。">
    <FullWidth>
      <Container padding="1rem 3rem 1rem" />
    </FullWidth>
  </PagePost>
);

export default Page404;
