import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class NoViewFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 23"
      >
        <G
          id="No_View_Fill"
          transform={ { translate: '(-150 -226)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 23.1475 0L 18.7375 4.41C 17.0575 3.49001 14.9975 2.86 12.4975 2.86C 3.4675 2.86 0.0675049 11.09 0.0375061 11.17C -0.0124969 11.29 -0.0124969 11.42 0.0375061 11.54C 0.0574951 11.6 1.61749 15.33 5.3775 17.77L 1.14751 22L 1.8575 22.71L 23.8575 0.710007L 23.1475 0ZM 9.1075 11.35C 9.1075 9.42001 10.6775 7.85001 12.6075 7.85001C 13.3675 7.85001 14.0475 8.11 14.6175 8.52L 9.7775 13.36C 9.36749 12.79 9.1075 12.11 9.1075 11.35ZM 20.4475 5.5C 23.6175 7.91 24.9375 11.11 24.9575 11.16C 25.0075 11.28 25.0075 11.42 24.9475 11.55C 24.9175 11.63 21.5175 19.86 12.4875 19.86C 10.4375 19.86 8.6875 19.42 7.1875 18.76L 11.3375 14.61C 11.7275 14.76 12.1475 14.85 12.5975 14.85C 14.5275 14.85 16.0975 13.28 16.0975 11.35C 16.0975 10.91 16.0075 10.48 15.8575 10.09L 20.4475 5.5Z"
          />
        </G>
      </Svg>
    );
  }
}

NoViewFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

NoViewFillIcon.defaultProps = {
  width: 25,
  height: 23,
  color: 'black',
};
