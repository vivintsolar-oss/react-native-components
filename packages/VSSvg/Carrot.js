import React, { Component } from 'react';
import { StyleSheet, ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

export default class Carrot extends Component {
  render() {
    const {
      rotate,
      height,
      width,
      color,
      style,
    } = this.props;

    const transform = [];
    const size = height / 2;
    const d = `M0 ${ height }l${ size }-${ size } ${ size } ${ size }z`;

    transform.push({
      rotate,
    });

    return (
      <View style={ style }>
        <Svg
          width={ width }
          height={ height }
          viewBox={ `0 0 ${ height } ${ width }` }
          transform={ transform }
        >
          <G
            id="vssvg_carrot"
            fill={ color }
          >
            <Path d={ d } />
          </G>
        </Svg>
      </View>
    );
  }
}

Carrot.propTypes = {
  style: ViewPropTypes.style,
  rotate: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Carrot.defaultProps = {
  width: 25,
  height: 25,
  color: 'black',
  rotate: '0deg',
  style: StyleSheet.create({}),
};
