import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';
import { BLACK } from '@vivintsolar/colors';

function XCircleIcon({ width, height, color, ...rest }) {
  return (
    <Svg
      width={ width }
      height={ height }
      viewBox="0 0 25 25"
      { ...rest }
    >
      <G
        id="X_Circle"
        transform={ { translate: '(-600 -475)' } }
        fill={ color }
      >
        <Path
          fillRule="evenodd"
          d="M 0 12.5C 0 5.60999 5.60999 0 12.5 0C 19.39 0 25 5.60999 25 12.5C 25 19.39 19.39 25 12.5 25C 5.60999 25 0 19.39 0 12.5ZM 16.65 17.64L 17.64 16.65L 13.49 12.5L 17.64 8.34998L 16.65 7.35999L 12.5 11.51L 8.34998 7.35999L 7.35999 8.34998L 11.51 12.5L 7.35999 16.65L 8.34998 17.64L 12.5 13.49L 16.65 17.64Z"
        />
      </G>
    </Svg>
  );
}

XCircleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

XCircleIcon.defaultProps = {
  width: 25,
  height: 25,
  color: BLACK,
};

export default XCircleIcon;
