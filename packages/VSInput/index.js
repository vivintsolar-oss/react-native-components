import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import AlertFillIcon from './AlertFillIcon';
import InfoFillIcon from './InfoFillIcon';

export default class VSInput extends React.Component {
  render() {
    const warning = this.props.error;
    const { info } = this.props;
    const myProps = {
      style: warning
        ? [ styles.input, styles.inputWarn ]
        : [ styles.input, styles.inputNorm ],
    };

    if (!this.props.reference) {
      myProps.reference = (input) => {
        this.props.form[this.props.index] = input;
      };
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.labelConainer }>
          <Text style={ warning ? styles.errLabel : styles.label }>
            {this.props.label}{' '}
          </Text>
          {warning ?
            <AlertFillIcon color={ '#E74C3C' } width={ 16 } height={ 16 } />
           :
            <View style={ { width: 16, height: 16 } } />
          }
          {info && !warning ?
            <TouchableWithoutFeedback onPress={ this.props.toggle }>
              <InfoFillIcon color={ '#FF8200' } width={ 16 } height={ 16 } />
            </TouchableWithoutFeedback>
           :
            <View style={ { width: 16, height: 16 } } />
          }
        </View>
        <TextInput
          { ...myProps }
          { ...this.props }
          ref={ this.props.reference }
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={ false }
        />
      </View>
    );
  }
}

VSInput.propTypes = {
  label: PropTypes.string,
  form: PropTypes.array,
  error: PropTypes.string,
  index: PropTypes.number,
  info: PropTypes.bool,
  toggle: PropTypes.func,
};

VSInput.defaultProps = {
  form: [],
  index: 0,
};

const styles = StyleSheet.create({
  labelConainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 8,
  },
  label: {
    fontSize: 12,
  },
  errLabel: {
    color: '#E74C3C',
    fontSize: 12,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    marginTop: 8,
    padding: 8,
  },
  inputNorm: {
    borderColor: '#D9DADB',
  },
  inputWarn: {
    borderColor: '#E74C3C',
  },
});
