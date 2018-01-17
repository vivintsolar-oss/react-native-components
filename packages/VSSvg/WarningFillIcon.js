import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class WarningFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 26 23"
      >
        <G
          id="Warning_Fill"
          transform={ { translate: '(-450 -176)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 24.7214 19.95L 14.1314 1.02C 13.7714 0.380005 13.1514 0 12.4514 0C 11.7914 0 11.1914 0.360001 10.8614 0.960007L 0.271362 19.95C -0.0986328 20.6 -0.088623 21.41 0.291351 22.05C 0.641357 22.64 1.24136 23 1.91138 23L 23.1013 23C 23.7614 23 24.3714 22.65 24.7214 22.05C 25.0814 21.41 25.0814 20.61 24.7214 19.95ZM 13.9914 13.75C 13.9914 13.89 13.8814 14 13.7414 14L 11.2414 14C 11.1013 14 10.9914 13.89 10.9914 13.75L 10.9914 7.25C 10.9914 7.11 11.1013 7 11.2414 7L 13.7414 7C 13.8814 7 13.9914 7.11 13.9914 7.25L 13.9914 13.75ZM 10.4614 17.59C 10.4614 18.69 11.3614 19.59 12.4614 19.59C 13.5614 19.59 14.4614 18.69 14.4614 17.59C 14.4614 16.49 13.5614 15.59 12.4614 15.59C 11.3614 15.59 10.4614 16.49 10.4614 17.59Z"
          />
        </G>
      </Svg>
    );
  }
}

WarningFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

WarningFillIcon.defaultProps = {
  width: 26,
  height: 23,
  color: 'black',
};
