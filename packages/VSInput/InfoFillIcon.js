import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

class InfoFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 16 16"
      >
        <G
          id="Info"
          transform={ { translate: '(-1606 -163)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 8 0C 3.59039 0 0 3.5904 0 8C 0 12.4096 3.59039 16 8 16C 12.4096 16 16 12.4096 16 8C 16 3.5904 12.4096 0 8 0ZM 8.95996 11.8016C 8.95996 12 8.79999 12.16 8.60156 12.16L 7.39838 12.16C 7.19995 12.16 7.03998 12 7.03998 11.8016L 7.03998 8.0384C 7.03998 7.84 7.19995 7.68 7.39838 7.68L 8.60156 7.68C 8.79999 7.68 8.95996 7.84 8.95996 8.0384L 8.95996 11.8016ZM 6.71997 5.4336C 6.71997 6.1376 7.29596 6.7136 8 6.7136C 8.70398 6.7136 9.27997 6.1376 9.27997 5.4336C 9.27997 4.7296 8.70398 4.1536 8 4.1536C 7.29596 4.1536 6.71997 4.7296 6.71997 5.4336Z"
          />
        </G>
      </Svg>
    );
  }
}

InfoFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

InfoFillIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};

export default InfoFillIcon;
