import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class SignOutIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 17"
        version="1.1"
      >
        <G
          id="Log_Out_2"
          transform={ { translate: '(-840 -5379)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 14.75 15.9902C 14.89 15.9902 15 15.8799 15 15.7402L 15 10.9902L 16 10.9902L 16 15.7402C 16 16.4302 15.44 16.9902 14.75 16.9902L 1.25 16.9902C 0.559998 16.9902 0 16.4302 0 15.7402L 0 1.25C 0 0.560059 0.559998 0 1.25 0L 14.75 0C 15.44 0 16 0.560059 16 1.25L 16 6L 15 6L 15 1.25C 15 1.10986 14.89 1 14.75 1L 1.25 1C 1.10999 1 1 1.10986 1 1.25L 1 15.7402C 1 15.8701 1.10999 15.9902 1.25 15.9902L 14.75 15.9902ZM 20.35 13.3403L 24.85 8.84033C 25.05 8.6499 25.05 8.33008 24.85 8.12012L 20.35 3.62012L 19.64 4.33008L 23.29 7.97998L 8 7.97998L 8 8.97998L 23.29 8.97998L 19.64 12.6299L 20.35 13.3403Z"
          />
        </G>
      </Svg>
    );
  }
}

SignOutIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

SignOutIcon.defaultProps = {
  width: 25,
  height: 17,
  color: 'black',
};
