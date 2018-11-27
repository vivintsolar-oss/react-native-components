import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Font, AppLoading } from 'expo';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories as getStories } from './storyLoader';

function loadStories() {
  getStories();
}

// import stories
configure(loadStories, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUI extends Component {
  state = {
    loaded: false,
  }
  componentWillMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async() => {
    // Add any assets here
    this.setState({
      loaded: true,
    });
  }

  render() {
    return this.state.loaded
      ? <StorybookUIRoot />
      : <AppLoading />;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI); //eslint-disable-line
export default StorybookUI;
