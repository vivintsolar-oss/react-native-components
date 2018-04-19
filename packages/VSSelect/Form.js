
import React, { Component } from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import DropDown from './DropDown';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
  },
});

export default class Form extends Component {
  render() {
    const {
      children,
      showDropDown,
      dropDownList,
      carrotColor,
      carrotStyle,
      carrotVertical,
      carrotHorizontal,
      listStyle,
      itemStyle,
      rightIconStyle,
    } = this.props;

    return (
      <View style={ styles.container }>
        { children }
        {
          showDropDown
          &&
          <DropDown
            list={ dropDownList }
            style={ styles.absolute }
            carrotColor={ carrotColor }
            carrotStyle={ carrotStyle }
            vertical={ carrotVertical }
            horizontal={ carrotHorizontal }
            listStyle={ listStyle }
            itemStyle={ itemStyle }
            rightIconStyle={ rightIconStyle }
          />
        }
      </View>
    );
  }
}

Form.propTypes = {
  children: PropTypes.any,
  showDropDown: PropTypes.bool,
  dropDownList: PropTypes.array,
  carrotColor: PropTypes.string,
  carrotVertical: PropTypes.string,
  carrotHorizontal: PropTypes.string,
  carrotStyle: ViewPropTypes.style,
  listStyle: ViewPropTypes.style,
  itemStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
};
