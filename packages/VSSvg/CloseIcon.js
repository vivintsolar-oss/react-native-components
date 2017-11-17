import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class CloseIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 25"
      >
        <G
          id="CloseIcon"
          transform={ { translate: '(-201 -476)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 19 21.12L 10.56 12.68L 2.12 21.12L 0 19L 8.44 10.56L 0 2.12L 2.12 0L 10.56 8.44L 19 0L 21.12 2.12L 12.68 10.56L 21.12 19L 19 21.12Z"
          />
        </G>
      </Svg>
    );
  }
}

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
};
