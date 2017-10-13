import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import VSTouchable from '@vivintsolar-oss/native-vs-touchable';

export default class VSButton extends Component {
  render() {
    const containerStyles = [ styles.button ];

    if (this.props.style) {
      containerStyles.push(this.props.style);
    }

    if (this.props.outline) {
      return (
        <VSTouchable style={ styles.outlineButton } { ...this.props }>
          <Text style={ styles.outlineButtonText }>
            {this.props.text ? this.props.text : 'CLICK ME'}
          </Text>
        </VSTouchable>
      );
    }

    return (
      <VSTouchable style={ containerStyles } { ...this.props }>
        <Text style={ styles.buttonText }>
          {this.props.text ? this.props.text : 'CLICK ME'}
        </Text>
      </VSTouchable>
    );
  }
}
VSButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#FF8200',
    padding: 10,
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
  },
  outlineButton: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FF8200',
    backgroundColor: '#ffffff',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  outlineButtonText: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#4a4a4a',
  },
});
