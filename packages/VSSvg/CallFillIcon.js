import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class CallFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 26"
      >
        <G
          id="Call"
          transform={ { translate: '(-400 -649)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 24.3241 17.585L 18.5341 14.435C 18.0341 14.165 17.3941 14.255 16.9941 14.665L 14.1641 17.545C 14.0641 17.645 13.9141 17.665 13.7941 17.585C 12.5041 16.715 11.3241 15.775 10.3141 14.815C 9.31415 13.765 8.28415 12.485 7.42415 11.215C 7.34415 11.095 7.36415 10.935 7.46415 10.835L 10.3441 8.005C 10.7541 7.605 10.8441 6.965 10.5741 6.465L 7.42415 0.675C 7.11415 0.105 6.42415 -0.145 5.82415 0.085L 1.33415 1.825C 0.444149 2.165 -0.0958512 3.065 0.0141488 4.005C 0.374149 7.095 1.66415 13.005 6.27415 17.855L 7.14415 18.725C 11.9941 23.335 17.9041 24.625 20.9941 24.985C 21.0741 24.995 21.1541 24.995 21.2341 24.995C 22.0841 24.995 22.8541 24.475 23.1641 23.665L 24.9041 19.175C 25.1441 18.585 24.8841 17.895 24.3241 17.585Z"
          />
        </G>
      </Svg>
    );
  }
}

CallFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CallFillIcon.defaultProps = {
  width: 25,
  height: 26,
  color: 'black',
};
