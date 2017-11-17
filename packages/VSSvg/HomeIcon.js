import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class HomeFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 26"
      >
        <G
          id="Home"
          transform={ { translate: '(-690 -74)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 20.61 25.0025L 4.10999 25.0025C 3.41998 25.0025 2.85999 24.4425 2.85999 23.7525L 2.85999 10.6825L 0.710022 12.8225L 0 12.1125L 12.01 0.142502C 12.21 -0.0475006 12.52 -0.0475006 12.72 0.142502L 24.71 12.1525L 24 12.8625L 21.86 10.7125L 21.86 23.7525C 21.86 24.4425 21.3 25.0025 20.61 25.0025ZM 15.86 24.0025L 20.61 24.0025C 20.75 24.0025 20.86 23.8925 20.86 23.7525L 20.86 9.7025L 12.37 1.2025L 3.85999 9.6925L 3.85999 23.7525C 3.85999 23.8925 3.96997 24.0025 4.10999 24.0025L 8.85999 24.0025L 8.85999 18.2525C 8.85999 17.5625 9.41998 17.0025 10.11 17.0025L 14.61 17.0025C 15.3 17.0025 15.86 17.5625 15.86 18.2525L 15.86 24.0025ZM 14.86 24.0025L 9.85999 24.0025L 9.85999 18.2525C 9.85999 18.1125 9.96997 18.0025 10.11 18.0025L 14.61 18.0025C 14.75 18.0025 14.86 18.1125 14.86 18.2525L 14.86 24.0025Z"
          />
        </G>
      </Svg>
    );
  }
}

HomeFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

HomeFillIcon.defaultProps = {
  width: 25,
  height: 26,
  color: 'black',
};
