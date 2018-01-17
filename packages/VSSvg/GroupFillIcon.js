import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class GroupFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 24"
      >
        <G
          id="Group_Fill"
          transform={ { translate: '(-600 -1675)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 7.71002 16.01L 1.02002 16.01C 0 16.01 0 14.96 0 14.5601L 0 14.35C 0 11.08 1.62 10.29 3.33002 9.51001C 4.03986 9.1936 4.02557 8.93555 4.00659 8.59229C 4.00336 8.5343 4 8.47375 4 8.41003L 4 8.30005C 4 8.25317 4.00067 8.20703 4.00134 8.1615C 4.00702 7.77979 4.01202 7.43774 3.60999 7C 3.60999 7 2.48999 5.62 2.48999 4.12C 2.48999 1.5 3.96997 0 6.52002 0C 9.09998 0 10.59 1.48999 10.59 4.09998C 10.59 5.19995 10.35 5.81995 9.96997 6.34998C 8.28998 7.16003 7.29999 8.82996 7.29999 11.12C 7.29999 12.99 8.57001 14.5699 8.76001 14.8L 8.77399 14.8163C 8.84271 14.8959 8.98999 15.0663 8.98999 15.15L 8.98999 15.42C 8.56 15.6 8.13 15.78 7.71002 16.01ZM 21.53 9.53003C 20.7446 9.18213 20.7499 8.95276 20.7598 8.52747L 20.76 8.52002L 20.76 8.34998C 20.76 7.95996 20.8 7.60999 21.28 7.09998L 21.2808 7.09912C 21.9504 6.3595 22.53 5.71936 22.53 4.14001C 22.53 1.52002 21.06 0.0200195 18.49 0.0200195C 15.92 0.0200195 14.45 1.51001 14.45 4.12C 14.45 5.34998 14.79 5.93005 15.26 6.47998C 16.82 7.33008 17.73 8.95007 17.73 11.14C 17.73 13.2001 16.91 14.11 16.18 14.91C 15.9894 15.1196 15.9895 15.1567 15.9899 15.3242L 15.99 15.35L 15.99 15.41C 15.99 15.42 15.99 15.4301 16.01 15.4301C 16.38 15.6 16.77 15.78 17.16 16L 23.97 16C 24.99 16 24.99 14.9501 24.99 14.55L 24.99 14.34C 25 11.1 23.24 10.3 21.53 9.53003ZM 14.76 15.52C 14.75 15.9301 14.75 16.1801 15.53 16.53L 15.5347 16.5321C 17.2432 17.3115 19 18.1129 19 21.35L 19 21.5601C 19 21.96 19 23.01 17.98 23.01L 7.02002 23.01C 6 23.01 6 21.96 6 21.5601L 6 21.35C 6 18.08 7.60999 17.28 9.32001 16.51C 10.0355 16.191 10.0228 15.9315 10.0056 15.5841C 10.0029 15.5286 10 15.4707 10 15.41L 10 15.3C 10 15.2596 10.0004 15.2197 10.0009 15.1803C 10.0049 14.791 10.0086 14.4449 9.59998 14C 9.59998 14 8.47998 12.63 8.47998 11.13C 8.47998 8.51001 9.94 7.01001 12.49 7.01001C 15.06 7.01001 16.53 8.51001 16.53 11.13C 16.53 12.72 15.95 13.36 15.28 14.09C 14.8 14.62 14.76 14.96 14.76 15.35L 14.76 15.52Z"
          />
        </G>
      </Svg>
    );
  }
}

GroupFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

GroupFillIcon.defaultProps = {
  width: 25,
  height: 24,
  color: 'black',
};
