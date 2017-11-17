import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class AddIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 16 16"
      >
        <G
          id="Add"
          transform={ { translate: '(-1554 0)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 8.96 16L 7.04 16L 7.04 8.96L 0 8.96L 0 7.04L 7.04 7.04L 7.04 0L 8.96 0L 8.96 7.04L 16 7.04L 16 8.96L 8.96 8.96L 8.96 16Z"
          />
        </G>
      </Svg>
    );
  }
}

AddIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

AddIcon.defaultProps = {
  width: 16,
  height: 16,
  color: 'black',
};
