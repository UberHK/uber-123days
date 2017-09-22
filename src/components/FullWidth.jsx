// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const FullWidth = styled.div`
  width: 100%;
  background: ${props => props.bgColor};
`;

FullWidth.defaultProps = {
  bgColor: 'transparent'
};

export default FullWidth;
