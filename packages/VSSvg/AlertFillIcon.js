import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class AlertFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 16 16"
      >
        <G
          id="Alert"
          transform={ { translate: '(-1684 0)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 8.40155 8.8L 7.59835 8.8C 7.37835 8.8 7.19995 8.6216 7.19995 8.4016L 7.19995 4.3984C 7.19995 4.1784 7.37835 4 7.59835 4L 8.40155 4C 8.62155 4 8.79995 4.1784 8.79995 4.3984L 8.79995 8.4016C 8.79995 8.6216 8.62155 8.8 8.40155 8.8ZM 7.99995 12C 7.55835 12 7.19995 11.6424 7.19995 11.2C 7.19995 10.7576 7.55835 10.4 7.99995 10.4C 8.44155 10.4 8.79995 10.7576 8.79995 11.2C 8.79995 11.6424 8.44155 12 7.99995 12ZM 8 0C 3.584 0 0 3.584 0 8C 0 12.416 3.584 16 8 16C 12.416 16 16 12.416 16 8C 16 3.584 12.416 0 8 0Z"
          />
        </G>
      </Svg>
    );
  }
}

AlertFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

AlertFillIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};
