import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class EyeIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 17"
      >
        <G
          id="Eye_Icon"
          transform={ { translate: '(-740 -229)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 0.0374756 8.68001C 0.0675049 8.75999 3.46753 16.99 12.4975 16.99C 21.5275 16.99 24.9275 8.75999 24.9575 8.68001C 25.0075 8.56 25.0075 8.43001 24.9575 8.31C 24.9275 8.23 21.5275 0 12.4975 0C 3.46753 0 0.0675049 8.23 0.0374756 8.31C -0.0125122 8.43001 -0.0125122 8.56 0.0374756 8.68001ZM 12.4975 15.99C 4.77747 15.99 1.57745 9.69 1.03748 8.49001C 1.57745 7.29001 4.77747 0.990005 12.4975 0.990005C 20.2175 0.990005 23.4175 7.29001 23.9575 8.49001C 23.4175 9.69 20.2175 15.99 12.4975 15.99ZM 12.4975 12.99C 10.0175 12.99 7.9975 10.97 7.9975 8.49001C 7.9975 6.01001 10.0175 3.99001 12.4975 3.99001C 14.9775 3.99001 16.9975 6.01001 16.9975 8.49001C 16.9975 10.97 14.9775 12.99 12.4975 12.99ZM 8.9975 8.49001C 8.9975 6.56001 10.5675 4.99001 12.4975 4.99001C 14.4275 4.99001 15.9975 6.56001 15.9975 8.49001C 15.9975 10.42 14.4275 11.99 12.4975 11.99C 10.5675 11.99 8.9975 10.42 8.9975 8.49001Z"
          />
        </G>
      </Svg>
    );
  }
}

EyeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

EyeIcon.defaultProps = {
  width: 25,
  height: 17,
  color: 'black',
};
