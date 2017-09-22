// @flow
import Media from '../util/MediaUtil';

export default `
  ${Media.fromWidth('MD').css`
    width: 18.375rem;
    margin-right: 0.75rem;
    &:nth-of-type(5n) {
      margin-right: 0;
    }
  `};
  ${Media.fromWidth('LG').css`
    width: 24.375rem;
  `};
  ${Media.fromWidth('XL').css`
    &:nth-of-type(5n) {
      margin-right: 0.75rem;
    }
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    width: 22rem;
  `};
`;
