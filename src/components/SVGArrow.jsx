// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const SVG = styled.svg`
  display: inline-block;
  width: 1.25rem;
  height: 0.75rem;
  transform: translateX(0);
  transition: transform 0.125s linear;
`;

const SVGContainer = ({
  className,
  color,
  direction
}: {
  className: string,
  color: string,
  direction: 'left' | 'right'
}) => (
  <SVG className={className} viewBox="0 0 56 34">
    <polygon
      fill={color}
      points={
        direction === 'left' ? (
          '7.672 15 55.888 15 55.888 19 7.674 19 19.299 30.583 16.476 33.417 0 17 16.476 .573 19.3 3.406 7.672 15'
        ) : (
          '48.216 15 0 15 0 19 48.214 19 36.588 30.583 39.412 33.417 55.888 17 39.412 .573 36.588 3.406 48.216 15'
        )
      }
    />
  </SVG>
);

SVGContainer.defaultProps = {
  direction: 'right',
  color: '#000'
};

export default SVGContainer;
