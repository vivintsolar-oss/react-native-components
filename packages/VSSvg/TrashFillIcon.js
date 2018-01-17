import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class TrashFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 16 16"
        version="1.1"
      >
        <G
          id="Trash_Fill"
          transform={ { translate: '(-1528 0)' } }
          fill={ this.props.color }
        >
          <Path
            id="path0_fill"
            fillRule="evenodd"
            d="M 10.88 0.8L 10.88 2.56L 16 2.56L 16 3.2L 0 3.2L 0 2.56L 5.12 2.56L 5.12 0.8C 5.12 0.3584 5.47839 0 5.92004 0L 10.08 0C 10.5216 0 10.88 0.3584 10.88 0.8ZM 1.92004 15.2L 1.92004 3.84L 14.0801 3.84L 14.0801 15.2C 14.0801 15.6416 13.7217 16 13.28 16L 2.72009 16C 2.27844 16 1.92004 15.6416 1.92004 15.2ZM 6.40002 12.16L 5.76001 12.16L 5.76001 6.4L 6.40002 6.4L 6.40002 12.16ZM 9.59998 12.16L 10.24 12.16L 10.24 6.4L 9.59998 6.4L 9.59998 12.16Z"
          />
        </G>
      </Svg>
    );
  }
}

TrashFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

TrashFillIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};
