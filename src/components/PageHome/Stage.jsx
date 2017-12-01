// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import EventsStage1 from './EventsStage1';
import EventsStage2 from './EventsStage2';
import EventsStage3 from './EventsStage3';
import EventsStage4 from './EventsStage4';
import Media from '../../util/MediaUtil';
import FullWidth from '../../components/FullWidth';

const SVG = styled.svg`
  display: inline-block;
  width: 8.75rem;
  height: 6.5rem;
  ${Media.fromWidth('XS').css`
    width: 8.75rem;
    height: 6.5rem;
  `};
  ${Media.fromWidth('SM').css`
    width: 10rem;
    height: 7.5rem;
  `};
`;

type Props = {
  active: boolean,
  id: number,
  children: React.Element,
  disabled: boolean,
  onClick: () => void
};

const Span = styled.span`
  margin-left: -2rem;
  margin-right: -2rem;
  ${Media.fromWidth('XS').css`
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  `};
  ${Media.fromWidth('SM').css`
    margin-left: -1rem;
    margin-right: -1rem;
  `};
  ${Media.fromWidth('MD').css`
    margin-left: -1rem;
    margin-right: -1rem;
    width: 10rem;
    height: 7.5rem;
  `};
  cursor: ${props => props.cursor};
`;

const Icon = (props: Props) => (
  <Span
    cursor={props.disabled ? 'not-allowed' : 'pointer'}
    onClick={props.disabled ? () => {} : props.onClick}
  >
    <SVG viewBox="0 0 400 300">
      <circle
        stroke={props.active ? '#6fbda5' : '#dadada'}
        strokeWidth="4"
        fill={props.active ? '#bae8da' : '#fafafa'}
        cx="200"
        cy="50"
        r="46"
      />
      <text
        fontSize="56"
        fontWeight="500"
        fill={props.active ? '#245748' : '#bbb'}
      >
        <tspan x="182" y="70">
          {props.id}
        </tspan>
      </text>
      <text
        fontSize="48"
        fontWeight="500"
        fill={props.active ? '#132728' : '#aaa'}
      >
        <tspan x="106" y="165">
          {props.children}
        </tspan>
      </text>
      {props.disabled && (
        <text fontSize="32" fill="#aaa">
          <tspan x="106" y="210">
            （敬請期待）
          </tspan>
        </text>
      )}
      {props.active && (
        <polygon points="0,300 200,240 400,300" fill="#e5e5e5" />
      )}
    </SVG>
  </Span>
);

const Connector = styled.div`
  background: url(data:image/gif;base64,R0lGODlhAQABAPAAANXV1P///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==)
    repeat-x 0 1.25rem;
  text-align: center;
  margin: 3rem 0 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  height: 6.5rem;
  ${Media.fromWidth('SM').css`
    height: 7.5rem;
  `};
`;

const Spacer = styled.div`
  display: inline-block;
  height: 0;
  width: 0;
  ${Media.fromWidth('MD').css`
    width: 2rem;
  `};
  ${Media.fromWidth('LG').css`
    width: 5rem;
  `};
  ${Media.fromWidth('XL').css`
    width: 8rem;
  `};
`;

const Events = ({ activeStage }: { activeStage: 1 | 2 | 3 | 4 }) => {
  if (activeStage === 1) {
    return <EventsStage1 />;
  } else if (activeStage === 2) {
    return <EventsStage2 />;
  } else if (activeStage === 3) {
    return <EventsStage3 />;
  }
  return <EventsStage4 />;
};

class Stage extends React.Component {
  state = {
    activeStage: 4
  };

  selectStage = index => {
    this.setState(() => ({ activeStage: index }));
  };

  render() {
    return (
      <FullWidth bgColor="#f7f7f8">
        <Connector>
          <Icon
            id={1}
            active={this.state.activeStage === 1}
            onClick={() => this.selectStage(1)}
          >
            第一階段
          </Icon>
          <Spacer />
          <Icon
            id={2}
            active={this.state.activeStage === 2}
            onClick={() => this.selectStage(2)}
          >
            第二階段
          </Icon>
          <Spacer />
          <Icon
            id={3}
            active={this.state.activeStage === 3}
            onClick={() => this.selectStage(3)}
          >
            第三階段
          </Icon>
          <Spacer />
          <Icon
            id={4}
            active={this.state.activeStage === 4}
            onClick={() => this.selectStage(4)}
          >
            第四階段
          </Icon>
        </Connector>
        <Events activeStage={this.state.activeStage} />
      </FullWidth>
    );
  }
}

export default Stage;
