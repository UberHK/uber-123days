// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import Media from '../util/MediaUtil';

const Container = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
  line-height: 1.15;
  font-size: 1rem;
  background-color: ${props => props.bgColor};
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.padding};
  ${Media.fromWidth('XS').css`
    width: 24.5rem;
  `};
  ${Media.fromWidth('SM').css`
    width: 33.5rem;
  `};
  ${Media.fromWidth('MD').css`
    width: 39.5rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 51.5rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 69.5rem;
  `};
`;

Container.defaultProps = { padding: '0', bgColor: 'transparent' };

export default Container;
