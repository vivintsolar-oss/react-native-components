import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { Layout } from '@vivintsolar-oss/native-vs-constants';

export default function ModalBody(props) {
  const styles = StyleSheet.create({
    body: {
      width: '100%',
      paddingHorizontal: Layout.EDGE_PADDING / 2,
      paddingBottom: Layout.EDGE_PADDING * 1.5, // eslint-disable-line no-magic-numbers
    },
  });

  return (
    <ScrollView style={ styles.body }>
      { props.children }
    </ScrollView>
  );
}

ModalBody.propTypes = {
  children: PropTypes.any,
};
