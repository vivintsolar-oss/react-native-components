import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class FuelTankFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 18 24"
      >
        <G
          id="FuelTank"
          transform={ { translate: '(-553 -227)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 5.33337 1.59866L 2.66669 1.59866L 2.66669 0L 5.33337 0L 5.33337 1.59866ZM 0.533997 2.66667L 16.534 2.66667C 16.828 2.66667 17.068 3.08067 17.068 3.466C 17.068 3.854 16.828 4.26534 16.534 4.26534L 16 4.26534L 16 10.6667L 1.06799 10.6667L 1.06799 4.26534L 0.533997 4.26534C 0.239319 4.26534 0 3.854 0 3.466C 0 3.08067 0.239319 2.66667 0.533997 2.66667ZM 16.534 14.4013L 16 14.4013L 1.06799 14.4013L 0.533997 14.4013L 0.533997 11.7347L 16.534 11.7347L 16.534 14.4013ZM 0 23.2007C 0 23.594 0.239319 24 0.533997 24L 16.534 24C 16.828 24 17.068 23.594 17.068 23.2007C 17.068 22.8073 16.828 22.4013 16.534 22.4013L 16 22.4013L 16 15.466L 1.06799 15.466L 1.06799 22.4013L 0.533997 22.4013C 0.239319 22.4013 0 22.8073 0 23.2007Z"
          />
        </G>
      </Svg>
    );
  }
}

FuelTankFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

FuelTankFillIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};
