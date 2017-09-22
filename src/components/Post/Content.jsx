// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';
import SVGArrow from '../SVGArrow';

const Content = styled.div`
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
  padding: 1rem;
  ${Media.fromWidth('SM').css`
    padding: 1.25rem !important;
  `};
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 1.1875rem;
  ${Media.fromWidth('SM').css`
    font-size: 1.25rem;
  `};
  ${Media.fromWidth('LG').css`
    font-size: 1.5rem;
  `};
`;

const Paragraph = styled.div`
  color: #444;
  margin: 0.75rem 0;
  line-height: 1.5;
  font-size: 0.9375rem;
  ${Media.fromWidth('SM').css`
    font-size: 1rem;
  `};
`;

const KnowMore = styled.div`color: #ea4444;`;

const SVGArrowPost = styled(SVGArrow)`margin-left: 0.5rem;`;

const OnlyLargerThan = styled.div`
  display: none;
  ${props => Media.fromWidth(props.size).css`
    display: inline;
  `};
`;

type Props = {
  className: string,
  title: string,
  desc1: string,
  desc2: string,
  shortenSize: 'XS' | 'SM' | 'MD' | 'LG' | 'XL'
};

const Post = ({ className, title, desc1, desc2, shortenSize }: Props) => (
  <Content className={className}>
    <Heading>{title}</Heading>
    <Paragraph>
      {desc1}
      <OnlyLargerThan size={shortenSize}>{desc2}</OnlyLargerThan>
    </Paragraph>
    <KnowMore>
      了解更多<SVGArrowPost color="#ea4444" />
    </KnowMore>
  </Content>
);

Post.defaultProps = {
  shortenSize: 'LG'
};

export default Post;
