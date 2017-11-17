import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class CircleFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 25"
      >
        <G
          id="Circle"
          transform={ { translate: '(-450 -425)' } }
          fill={ this.props.color }
          stroke={ this.props.stroke }
          strokeWidth={ this.props.strokeWidth }
        >
          <Path
            d="M 12.5 0C 5.61 0 0 5.61 0 12.5C 0 19.39 5.61 25 12.5 25C 19.39 25 25 19.39 25 12.5C 25 5.61 19.39 0 12.5 0Z"
          />
        </G>
      </Svg>
    );
  }
}

CircleFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleFillIcon.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
  stroke: 'none',
  strokeWidth: 0,
};
