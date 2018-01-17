import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class RightChevron extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 14 23"
      >
        <G
          id="Right_Chevron"
          transform={ { translate: '(-206 -5126)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 2.12 22.12L 0 20L 8.94 11.06L 0 2.12L 2.12 0L 12.12 10C 12.71 10.59 12.71 11.54 12.12 12.12L 2.12 22.12Z"
          />
        </G>
      </Svg>
    );
  }
}

RightChevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

RightChevron.defaultProps = {
  width: 14,
  height: 23,
  color: 'black',
};
