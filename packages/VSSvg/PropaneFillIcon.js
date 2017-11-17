import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class PropaneFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 14 24"
      >
        <G
          id="Propane"
          transform={ { translate: '(-735 -227)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 9.41174 0L 3.76471 0L 3.76471 0.470581L 3.76471 3.29411L 4.23529 3.29411L 4.23529 0.470581L 8.94116 0.470581L 8.94116 3.29411L 9.41174 3.29411L 9.41174 0.470581L 9.41174 0ZM 5.64703 1.41176L 7.52936 1.41176L 7.52936 3.29411L 5.64703 3.29411L 5.64703 1.41176ZM 5 3.76471C 2.23859 3.76471 0 6.00328 0 8.76471L 0 8.94118L 13.1765 8.94118L 13.1765 8.76471C 13.1765 6.00328 10.9379 3.76471 8.17645 3.76471L 5 3.76471ZM 13.1765 9.88235L 0 9.88235L 0 16.4706L 13.1765 16.4706L 13.1765 9.88235ZM 0 18.6471L 0 17.4118L 13.1765 17.4118L 13.1765 18.6471C 13.1765 20.3039 11.8333 21.6471 10.1765 21.6471L 3 21.6471C 1.34314 21.6471 0 20.3039 0 18.6471ZM 10.353 22.1176L 2.82355 22.1176L 2.82355 24L 10.353 24L 10.353 22.1176Z"
          />
        </G>
      </Svg>
    );
  }
}

PropaneFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

PropaneFillIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};
