import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import VSSvg from '@vivintsolar-oss/native-vs-icons';
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';
import Touchable from '@vivintsolar-oss/native-vs-touchable';

export default class VSInput extends Component {
  constructor(props) {
    super(props);
    this.togglePw = this.togglePw.bind(this);
    this.state = {
      showPw: false,
    };
  }

  togglePw() {
    return this.setState({ showPw: !this.state.showPw });
  }

  borderState() {
    if (this.props.error) {
      return Colors.ERROR;
    }

    return Colors.BORDER_GRAY;
  }

  labelState() {
    if (this.props.error) {
      return Colors.ERROR;
    }

    return Colors.BLACK;
  }

  render() {
    const styles = StyleSheet.create({
      labelConainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 8,
      },
      label: {
        fontSize: 12,
        color: this.labelState(),
      },
      input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 8,
        marginTop: 8,
        padding: 8,
        borderColor: this.borderState(),
      },
      icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 48,
        position: 'absolute',
        top: 8,
        right: 0,
      },
    });

    const { error, reference, form, index, label, toggle, info, password, infoTestID, infoAccessibilityLabel } = this.props;
    const { showPw } = this.state;
    const warning = error;
    const myProps = {
      style: styles.input,
    };
    let PwIcon = VSSvg.NoViewFillIcon;
    let LabelIcon = VSSvg.AlertFillIcon;
    let LabelIconColor = Colors.ERROR;
    let IconWrapper = null;

    if (!reference) {
      myProps.reference = (input) => {
        form[index] = input;
      };
    }

    if (info) {
      LabelIcon = VSSvg.InfoFillIcon;
      LabelIconColor = Colors.ORANGE;
      IconWrapper = ( // eslint-disable-line no-extra-parens
        <Touchable
          onPress={ toggle }
          testID={ infoTestID }
          accessibilityLabel={ infoAccessibilityLabel }
        >
          <LabelIcon color={ LabelIconColor } width={ 16 } height={ 16 } />
        </Touchable>
      );
    }

    if (warning) {
      LabelIcon = VSSvg.AlertFillIcon;
      LabelIconColor = Colors.ERROR;
      IconWrapper = <LabelIcon color={ LabelIconColor } width={ 16 } height={ 16 } />;
    }

    if (password) {
      if (showPw) {
        PwIcon = VSSvg.EyeFillIcon;
      }
      myProps.secureTextEntry = !showPw;
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.labelConainer }>
          <Text style={ styles.label }>{ label }  </Text>
          { IconWrapper }
        </View>
        {
          password
            ? <View>
              <TextInput
                { ...myProps }
                { ...this.props }
                ref={ reference }
                underlineColorAndroid="rgba(0,0,0,0)"
                autoCorrect={ false }
              />
              <TouchableWithoutFeedback onPress={ this.togglePw }>
                <View style={ styles.icon } >
                  <PwIcon
                    color={ Colors.ORANGE }
                    width={ 16 }
                    height={ 16 }
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>

            : <TextInput
              { ...myProps }
              { ...this.props }
              ref={ reference }
              underlineColorAndroid="rgba(0,0,0,0)"
              autoCorrect={ false }
            />
        }
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
  reference: PropTypes.func,
  password: PropTypes.bool,
  infoTestID: PropTypes.string,
  infoAccessibilityLabel: PropTypes.string,
};

VSInput.defaultProps = {
  form: [],
  index: 0,
};
