import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class ChartFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 25"
      >
        <G
          id="Chart"
          transform={ { translate: '(-350 -4950)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 15.57 8.75977C 15.84 9.1001 16.01 9.52979 16.01 10C 16.01 11.1001 15.11 12 14.01 12C 12.91 12 12.01 11.1001 12.01 10C 12.01 9.68994 12.08 9.41016 12.21 9.1499L 9.17001 6.62012C 8.84 6.85986 8.44 7 8.01001 7C 7.69 7 7.39999 6.91992 7.13 6.79004L 3.64001 10.8599C 3.87 11.1802 4 11.5801 4 12C 4 13.1001 3.10001 14 2 14C 0.899994 14 0 13.1001 0 12C 0 10.8999 0.899994 10 2 10C 2.32001 10 2.60999 10.0801 2.88 10.21L 6.37 6.14014C 6.14001 5.81982 6.01001 5.41992 6.01001 5C 6.01001 3.8999 6.91 3 8.01001 3C 9.10999 3 10.01 3.8999 10.01 5C 10.01 5.31006 9.94 5.58984 9.81 5.8501L 12.85 8.37988C 13.18 8.14014 13.58 8 14.01 8C 14.28 8 14.54 8.06006 14.77 8.1499L 18.45 3.24023C 18.18 2.8999 18.01 2.47021 18.01 2C 18.01 0.899902 18.91 0 20.01 0C 21.11 0 22.01 0.899902 22.01 2C 22.01 3.1001 21.11 4 20.01 4C 19.74 4 19.48 3.93994 19.25 3.8501L 15.57 8.75977ZM 3.51001 18L 0.51001 18C 0.230011 18 0.0100098 18.2202 0.0100098 18.5L 0.0100098 24.5C 0.0100098 24.7798 0.230011 25 0.51001 25L 3.51001 25C 3.79001 25 4.01001 24.7798 4.01001 24.5L 4.01001 18.5C 4.01001 18.2202 3.79001 18 3.51001 18ZM 12.01 16.5C 12.01 16.2202 12.23 16 12.51 16L 15.51 16C 15.79 16 16.01 16.2202 16.01 16.5L 16.01 24.5C 16.01 24.7798 15.79 25 15.51 25L 12.51 25C 12.23 25 12.01 24.7798 12.01 24.5L 12.01 16.5ZM 9.51001 14L 6.51001 14C 6.23001 14 6.01001 14.2202 6.01001 14.5L 6.01001 24.5C 6.01001 24.7798 6.23001 25 6.51001 25L 9.51001 25C 9.79001 25 10.01 24.7798 10.01 24.5L 10.01 14.5C 10.01 14.2202 9.79001 14 9.51001 14ZM 18.01 10.5C 18.01 10.2202 18.23 10 18.51 10L 21.51 10C 21.79 10 22.01 10.2202 22.01 10.5L 22.01 24.5C 22.01 24.7798 21.79 25 21.51 25L 18.51 25C 18.23 25 18.01 24.7798 18.01 24.5L 18.01 10.5Z"
          />
        </G>
      </Svg>
    );
  }
}

ChartFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

ChartFillIcon.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
};
