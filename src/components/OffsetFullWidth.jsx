// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const OffsetFullWidth = styled.div`
  position: relative;
  background: url(data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==)
    100% 0 no-repeat;
  background-size: 50% 100%;
`;

OffsetFullWidth.defaultProps = {
  bgColor: 'transparent'
};

export default OffsetFullWidth;
