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
          transform={ { translate: '(-50 -74)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 24.7 12.1563L 12.71 0.146274C 12.52 -0.053726 12.2 -0.043726 12 0.146274L 0 12.1163L 0.71 12.8263L 2.85 10.6863L 2.85 23.7563C 2.85 24.4463 3.41 25.0063 4.1 25.0063L 9.85 25.0063L 9.85 18.7563C 9.85 18.3463 10.19 18.0063 10.6 18.0063L 14.1 18.0063C 14.51 18.0063 14.85 18.3463 14.85 18.7563L 14.85 25.0063L 20.6 25.0063C 21.29 25.0063 21.85 24.4463 21.85 23.7563L 21.85 10.7163L 24 12.8663L 24.7 12.1563Z"
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
