import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import { CircleFillIcon } from '../VSSvg/index';
import Indicator from './Indicator';

export default class VSSwipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicatorColor: props.indicatorColor,
      activeIndex: 0,
    };

    this.generateIndicators = this.generateIndicators.bind(this);
  }

  generateIndicators() {
    const { state } = this;

    return this.props.children.map((child, i) => {
      return (
        <Indicator
          key={ `indicator${ i }` }
          selected={ state.activeIndex === i }
          icon={ (color) => {
            return (
              <CircleFillIcon
                color={ color }
                stroke={ 'gray' }
                strokeWidth={ 1 }
                width={ 6 }
                height={ 6 }
              />
            );
          } }
        />
      );
    });
  }

  render() {
    const { children } = this.props;

    return (
      <View
        style={ styles.container }
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={ false }
          scrollEventThrottle={ 16 }
          pagingEnabled
          onScroll={ (event) => {
            const width = Dimensions.get('window').width;
            const { x } = event.nativeEvent.contentOffset;

            this.setState({ activeIndex: Math.floor((x + 1) / width) });
          } }
        >
          { children }
        </ScrollView>
        <View
          style={ styles.indicatorContainer }
        >
          { this.generateIndicators() }
        </View>
      </View>
    );
  }
}

VSSwipe.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  indicatorColor: PropTypes.string,
};

VSSwipe.defaultProps = {
  indicatorColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  indicator: {
    marginLeft: 5,
    marginRight: 5,
  },
});
