import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function Indicator(props) {
  let color = props.inactiveColor;

  if (props.selected) {
    color = props.activeColor;
  }

  return (
    <View style={ styles.indicator }>
      { props.icon(color) }
    </View>
  );
}

Indicator.propTypes = {
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  selected: PropTypes.bool,
  icon: PropTypes.func,
};

Indicator.defaultProps = {
  inactiveColor: 'white',
  activeColor: 'black',
  selected: false,
};

const styles = StyleSheet.create({
  indicator: {
    marginLeft: 5,
    marginRight: 5,
  },
});
