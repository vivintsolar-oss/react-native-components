import React, { Component } from 'react';
import { StyleSheet, View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from '@vivintsolar-oss/native-vs-touchable';
import Layout from '@vivintsolar-oss/native-vs-constants/Layout';
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';
import { RightChevron } from '@vivintsolar-oss/native-vs-icons';

export default class ListItem extends Component {
  render() {
    const {
      label,
      children,
      itemStyle,
      labelTextStyle,
      leftIcon,
      rightIcon,
      leftIconStyle,
      rightIconStyle,
      renderLabel,
      onPress,
      itemHeight,
    } = this.props;
    const MainContent = onPress ? Touchable : View;
    const styles = StyleSheet.create({
      item: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.BORDER_GRAY,
        borderStyle: 'solid',
        minHeight: itemHeight,
      },
      label: {
        minHeight: itemHeight,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      labelText: {
        fontSize: 16,
        flex: 1,
        justifyContent: 'flex-start',
      },
    });

    return (
      <View style={ [ styles.item, itemStyle ] }>
        <MainContent onPress={ onPress } style={ styles.label }>
          {
            leftIcon ?
              <View style={ [ styles.leftIcon, leftIconStyle ] }>
                { leftIcon() }
              </View>
              : null
          }
          {
            label ?
              <Text
                allowFontScaling={ false }
                style={ [ styles.labelText, labelTextStyle ] }
              >
                { label }
              </Text>
              : null
          }
          {
            renderLabel ?
              renderLabel()
              : null
          }
          {
            rightIcon ?
              <View style={ [ styles.rightIcon, rightIconStyle ] }>
                { rightIcon() }
              </View>
              : null
          }
        </MainContent>
        { children }
      </View>
    );
  }
}

ListItem.defaultProps = {
  renderLabel: () => {
    return null;
  },
  leftIcon: () => {
    return null;
  },
  rightIcon: () => {
    return (
      <RightChevron
        color={ Colors.ORANGE }
        width={ Layout.EDGE_PADDING }
        height={ Layout.EDGE_PADDING }
      />
    );
  },
  itemHeight: 48,
};

ListItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.array,
  onPress: PropTypes.func,
  itemHeight: PropTypes.number,
  itemStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
  leftIconStyle: ViewPropTypes.style,
  labelTextStyle: ViewPropTypes.style,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
  renderLabel: PropTypes.func,
};
