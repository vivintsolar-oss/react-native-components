import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';

const List = (props) => {
  const { children, containerStyle, bgColor, ...attributes } = props;
  const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: bgColor,
      width: '100%',
    },
  });

  return (
    <View
      { ...attributes }
      style={ [ styles.listContainer, containerStyle && containerStyle ] }
    >
      { children }
    </View>
  );
};

List.propTypes = {
  children: PropTypes.any,
  containerStyle: ViewPropTypes.style,
  bgColor: PropTypes.string,
};

List.defaultProps = {
  bgColor: Colors.WHITE,
};

export default List;
