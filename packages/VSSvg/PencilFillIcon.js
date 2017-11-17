import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class PencilFillIcon extends Component {
  render() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        viewBox="0 0 25 25"
      >
        <G
          id="Pencil"
          transform={ { translate: '(-150 -650)' } }
          fill={ this.props.color }
        >
          <Path
            fillRule="evenodd"
            d="M 24.3885 2.54749L 22.4385 0.607483C 21.6285 -0.202515 20.2985 -0.202515 19.4885 0.607483L 17.9085 2.17749L 22.8085 7.07751L 24.3785 5.50751C 24.7685 5.11749 24.9885 4.58752 24.9885 4.02753C 24.9885 3.46753 24.7785 2.9375 24.3885 2.54749ZM 19.3785 5.04749L 17.2085 2.8775L 1.96851 18.0775L 4.15851 20.2675L 19.3785 5.04749ZM 20.0885 5.75751L 22.1085 7.77753L 6.87849 22.9875L 4.8685 20.9775L 20.0885 5.75751ZM 1.20851 18.8375L 1.2585 18.7875L 6.15851 23.7075L 6.0885 23.7775C 6.01851 23.8475 5.93851 23.8975 5.8385 23.9175L 0.598511 24.9775C 0.568512 24.9875 0.528503 24.9875 0.498505 24.9875C 0.3685 24.9875 0.23851 24.9275 0.148499 24.8375C 0.0285034 24.7175 -0.0214996 24.5475 0.00849915 24.3875L 1.06851 19.0975C 1.0885 18.9975 1.1385 18.9075 1.20851 18.8375Z"
          />
        </G>
      </Svg>
    );
  }
}

PencilFillIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

PencilFillIcon.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
};
