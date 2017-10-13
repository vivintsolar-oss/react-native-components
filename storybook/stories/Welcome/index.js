import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      fontSize: 18,
      marginBottom: 18
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18
    }
  };

  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>VSLR UI Kit</Text>
        <Text style={this.styles.content}>
          Now go crazy and check out all the components!
        </Text>
      </View>
    );
  }
}

Welcome.propTypes = {
  showApp: PropTypes.func
};
Welcome.defaultProps = {
  showApp: () => {}
};
