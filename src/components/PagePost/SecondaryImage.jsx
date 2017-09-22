// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../../util/MediaUtil';

const SecondaryImage = styled.img`
  background: #eee;
  width: 100%;
  margin-bottom: 0.375rem;
  ${Media.fromWidth('LG').css`
    width: 22.5rem;
    margin-right: 0.5rem;
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  `};
  ${Media.fromWidth('XL').css`
    &:nth-of-type(2n) {
      margin-right: 0.5rem;
    }
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    width: 20.75rem;
  `};
`;

export default SecondaryImage;
