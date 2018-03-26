import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
  ViewPropTypes,
} from 'react-native';
import { AlertFillIcon, InfoFillIcon, DownChevron } from '@vivintsolar-oss/native-vs-icons';
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';
import Touchable from '@vivintsolar-oss/native-vs-touchable';
import DropDown from './DropDown';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: false,
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.styles = this.styles.bind(this);
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

  toggleSelect() {
    if (this.props.action) {
      return this.props.action();
    }

    return this.setState({ select: !this.state.select });
  }

  styles() {
    return StyleSheet.create({
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
        backgroundColor: Colors.WHITE,
        borderColor: this.borderState(),
      },
      icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        position: 'absolute',
        top: 5,
        bottom: 0,
        right: 0,
      },
    });
  }

  render() {
    const styles = this.styles();

    const {
      error,
      VSForm,
      label,
      toggle,
      info,
      dropDownList,
      carrotColor,
      carrotStyle,
      carrotVertical,
      carrotHorizontal,
    } = this.props;

    const { select } = this.state;

    const warning = error;
    const myProps = {
      style: styles.input,
    };

    let LabelIcon = AlertFillIcon;
    let LabelIconColor = Colors.ERROR;
    let IconWrapper;

    if (info) {
      LabelIcon = InfoFillIcon;
      LabelIconColor = Colors.ORANGE;
      IconWrapper = <Touchable onPress={ toggle } ><LabelIcon color={ LabelIconColor } width={ 16 } height={ 16 } /></Touchable>;
    }

    if (warning) {
      LabelIcon = AlertFillIcon;
      LabelIconColor = Colors.ERROR;
      IconWrapper = <LabelIcon color={ LabelIconColor } width={ 16 } height={ 16 } />;
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.labelConainer }>
          <Text style={ styles.label }>{ label } </Text>
          {
            info || warning
              ? IconWrapper
              : null
          }
        </View>
        <View>
          <TextInput
            { ...myProps }
            { ...this.props }
            autoCorrect={ false }
          />
          <TouchableWithoutFeedback
            hitSlop={ { top: 20, left: 20, bottom: 20, right: 20 } }
            onPress={ this.toggleSelect }
          >
            <View style={ styles.icon } >
              <DownChevron
                color={ Colors.ORANGE }
                width={ 16 }
                height={ 16 }
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {
          select && !VSForm ?
            <DropDown
              list={ dropDownList }
              carrotColor={ carrotColor }
              carrotStyle={ carrotStyle }
              vertical={ carrotVertical }
              horizontal={ carrotHorizontal }
            /> : null
        }
      </View>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  form: PropTypes.array,
  error: PropTypes.string,
  index: PropTypes.number,
  info: PropTypes.bool,
  toggle: PropTypes.func,
  reference: PropTypes.func,
  action: PropTypes.func,
  VSForm: PropTypes.bool,
  dropDownList: PropTypes.array,
  carrotColor: PropTypes.string,
  carrotVertical: PropTypes.string,
  carrotHorizontal: PropTypes.string,
  carrotStyle: ViewPropTypes.style,
};
