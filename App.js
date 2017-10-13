import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StorybookUI from './storybook';

class App extends React.Component {
  render() {
    return <View style={ styles.container } />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StorybookUI;
