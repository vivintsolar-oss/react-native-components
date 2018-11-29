import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import { BLACK } from '@vivintsolar/colors';

function UpChevron({ height, width, color, ...rest }) {
  return (
    <Svg
      width={ width }
      height={ height }
      viewBox="0 0 14 23"
      { ...rest }
    >
      <G
        id="Up_Chevron"
        transform={ { translate: '(-206 -5126)' } }
        fill={ color }
      >
        <Path
          d="M14.4665461,13.0867993 L8,6.62025316 L1.53345389,13.0867993 L0,11.5533454 L7.23327306,4.32007233 C7.66003617,3.89330922 8.34719711,3.89330922 8.76672694,4.32007233 L16,11.5533454 L14.4665461,13.0867993 Z" id="path-1"
        />
      </G>
    </Svg>
  );
}

UpChevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

UpChevron.defaultProps = {
  width: 14,
  height: 23,
  color: BLACK,
};

export default UpChevron;
