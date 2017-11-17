import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class LeftChevron extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 14 23"
      >
        <G
          id="LeftChevron"
          transform={ { translate: '(-156 -5126)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 10.4425 22.12L 0.4425 12.12C -0.1475 11.53 -0.1475 10.58 0.4425 10L 10.4425 0L 12.5625 2.12L 3.6225 11.06L 12.5625 20L 10.4425 22.12Z"
          />
        </G>
      </Svg>
    );
  }
}

LeftChevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

LeftChevron.defaultProps = {
  width: 14,
  height: 23,
  color: 'black',
};
