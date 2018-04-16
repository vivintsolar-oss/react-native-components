import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import PropTypes from 'prop-types';

let TouchableComponent;

if (Platform.OS === 'android') {
  TouchableComponent =
    Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback;
} else {
  TouchableComponent = TouchableOpacity;
}

if (
  Platform.OS === 'android' &&
  TouchableComponent !== TouchableNativeFeedback
) {
  TouchableComponent.SelectableBackground = () => ({});
  TouchableComponent.SelectableBackgroundBorderless = () => ({});
  TouchableComponent.Ripple = (color, borderless) => ({});
}

export default class VSTouchable extends React.Component {
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless = TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;

  render() {
    if (TouchableComponent === TouchableNativeFeedback) {
      let { children, style, ...props } = this.props;

      return (
        <TouchableComponent {...props}>
          <View style={style}>{children}</View>
        </TouchableComponent>
      );
    } else {
      let { children, fallback, style, ...props } = this.props;
      let TouchableFallback = fallback || TouchableComponent;

      return (
        <TouchableFallback {...props} activeOpacity={0.6}>
          <View style={style}>{children}</View>
        </TouchableFallback>
      );
    }
  }
}

VSTouchable.propTypes = {};
