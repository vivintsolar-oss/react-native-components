import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import Collapsible from 'react-native-collapsible';

const indicatorMap = {
  true: '▼',
  false: '▲',
};

function getIndicator(isCollapsed) {
  return indicatorMap[isCollapsed.toString()];
}

class VSCollapsible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: props.startCollapsed,
      indicator: getIndicator(props.startCollapsed),
      label: props.startCollapsed ? props.openText : props.closeText,
    };
  }

  handleToggle = () => {
    this.setState(prevState => {
      const flipped = !prevState.isCollapsed;
      const label = flipped ? this.props.openText : this.props.closeText;
      return {
        isCollapsed: flipped,
        indicator: getIndicator(flipped),
        label: label.toUpperCase(),
      };
    });
  };

  render() {
    const { alwaysVisible, children, duration } = this.props;
    const { isCollapsed, indicator, label } = this.state;

    return (
      <View style={ styles.container }>
        { alwaysVisible }
        <View>
          <Collapsible collapsed={isCollapsed} duration={duration} >
            { children }
          </Collapsible>
          <Text onPress={this.handleToggle} style={ styles.label } >
            { label } {indicator}
          </Text>
        </View>
      </View>
    );
  }
}

VSCollapsible.propTypes = {
  startCollapsed: PropTypes.bool,
  duration: PropTypes.number,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  alwaysVisible: PropTypes.node,
};

VSCollapsible.defaultProps = {
  startCollapsed: true,
  duration: 300,
  openText: 'Advanced',
  closeText: 'Close',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  label: {
    color: '#ff8201',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default VSCollapsible;
