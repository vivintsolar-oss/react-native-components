import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Layout, Colors } from '@vivintsolar-oss/native-vs-constants';

export default function ModalContainer(props) {
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: Layout.EDGE_PADDING,
      backgroundColor: Colors.LIGHTER_GRAY,
    },
    innerModal: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.WHITE,
      borderRadius: 4,
      width: '100%',
      maxHeight: '80%',
    },
  });

  return (
    <View style={ styles.modal }>
      <View style={ styles.innerModal }>
        { props.children }
      </View>
    </View>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.any,
};
