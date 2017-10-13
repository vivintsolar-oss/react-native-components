import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const CenterView = (props) => {
  return <View style={ styles.main }>{props.children}</View>;
};

CenterView.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CenterView as default };

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
