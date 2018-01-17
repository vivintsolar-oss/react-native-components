import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class EyeFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 17"
      >
        <G
          id="Eye_Fill"
          transform={ { translate: '(-100 -229)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 12.4975 0C 21.5275 0 24.9275 8.23 24.9575 8.31C 25.0075 8.43001 25.0075 8.57001 24.9575 8.67999C 24.9275 8.75999 21.5275 16.99 12.4975 16.99C 3.4675 16.99 0.0674973 8.75999 0.0374985 8.67999C -0.0124969 8.56 -0.0124969 8.43001 0.0374985 8.31C 0.0674973 8.23 3.4675 0 12.4975 0ZM 9.1075 8.5C 9.1075 10.43 10.6775 12 12.6075 12C 14.5375 12 16.1075 10.43 16.1075 8.5C 16.1075 6.57001 14.5375 5 12.6075 5C 10.6775 5 9.1075 6.57001 9.1075 8.5Z"
          />
        </G>
      </Svg>
    );
  }
}

EyeFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

EyeFillIcon.defaultProps = {
  width: 25,
  height: 17,
  color: 'black',
};
