import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class DownChevron extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 18 16"
      >
        <G
          id="Down_Chevron"
          transform={ { translate: '(-3064 -920)' } }
          fill={ this.props.color }
        >
          <Path
            d="M 8.39144 9.08499C 8.10312 9.08499 7.80722 8.97649 7.58719 8.76673L 0 1.53345L 1.60849 0L 8.39144 6.46655L 15.1744 0L 16.7829 1.53345L 9.19568 8.76673C 8.97565 8.97649 8.67975 9.08499 8.39144 9.08499Z"
          />
        </G>
      </Svg>
    );
  }
}

DownChevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

DownChevron.defaultProps = {
  width: 18,
  height: 16,
  color: 'black',
};
