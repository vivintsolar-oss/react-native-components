import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Wrapper = ({
  data = [
    {
      unit: 'defs',
      value: 0,
      color: 'black',
    },
  ],
  style = null,
  children,
}) => {
  return (
    <View style={ [ defaultStyles.wrapper, style ] }>
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, { data });
        })
      }
    </View>
  );
};

Wrapper.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
  children: PropTypes.any,
};

const defaultStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Wrapper;
