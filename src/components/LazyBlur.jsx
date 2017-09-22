// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

type Props = {
  blur: string,
  background: string,
  duration: number
};

export default class ReactLazyBlur extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      blur: {},
      background: {
        backgroundImage: `url(${props.blur})`
      },
      loaded: false
    };
  }

  componentDidMount = () => {
    this.lazy();
  };

  lazy = () => {
    const { background, blur } = this.props;
    const duration = this.props.duration || 500;

    const img = new Image();
    img.onload = () => {
      this.setState({
        background: {
          backgroundImage: `url(${img.src})`
        },
        blur: {
          backgroundImage: `url(${blur})`,
          opacity: 1
        }
      });
      this.setState(() => {
        setTimeout(() => this.setState({ loaded: true }), duration);
        return {
          background: {
            backgroundImage: `url(${img.src})`
          },
          blur: {
            backgroundImage: `url(${blur})`,
            transition: 'opacity',
            transitionDuration: duration / 1000 + 's',
            opacity: 0
          }
        };
      });
    };
    img.src = background;
  };

  render() {
    const { children } = this.props;
    const { background, blur } = this.state;
    const className = this.props.className
      ? this.props.className + ' react-lazy-blur'
      : 'react-lazy-blur';

    return (
      <span>
        <div className={className} style={{ position: 'relative' }}>
          <div className="react-lazy-blur background" style={background}>
            {children}
          </div>
          {!this.state.loaded && (
            <div
              className="react-lazy-blur blur"
              style={Object.assign({ position: 'absolute', top: 0 }, blur)}
            >
              {children}
            </div>
          )}
        </div>
      </span>
    );
  }
}
