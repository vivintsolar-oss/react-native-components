import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class CheckmarkCircleFill extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 25"
      >
        <G
          id="CheckmarkCircle"
          transform={ { translate: '(-550 -475)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 0 12.5C 0 5.60999 5.60999 0 12.5 0C 19.39 0 25 5.60999 25 12.5C 25 19.39 19.39 25 12.5 25C 5.60999 25 0 19.39 0 12.5ZM 10.82 17.21C 11.01 17.21 11.19 17.13 11.32 17L 19.95 8.34998L 18.96 7.35999L 10.81 15.51L 7.67999 12.38L 6.69 13.37L 10.32 17C 10.46 17.14 10.63 17.21 10.82 17.21Z"
          />
        </G>
      </Svg>
    );
  }
}

CheckmarkCircleFill.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CheckmarkCircleFill.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
};
