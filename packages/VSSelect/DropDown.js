import React, { Component } from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '@vivintsolar-oss/native-vs-constants/Layout';
import VSSvg from '@vivintsolar-oss/native-vs-icons';
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';
import { List, ListItem } from '@vivintsolar-oss/native-vs-list';

const STRING_POSITION_TOP = 'top';
const STRING_POSITION_RIGHT = 'right';
const STRING_POSITION_LEFT = 'left';
const STRING_POSITION_MIDDLE = 'middle';
const STRING_POSITION_BOTTOM = 'bottom';
const STRING_CARROT_COLOR = 'white';
const OBJECT_CARROT_CONTAINER_STYLE = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const styles = StyleSheet.create({
  itemStyle: {
    paddingLeft: Layout.EDGE_PADDING,
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  rightIconStyle: {
    paddingHorizontal: Layout.EDGE_PADDING,
  },
  center: {
    textAlign: 'center',
  },
  list: {
    zIndex:  110,
    backgroundColor: Colors.WHITE,
  },
});

export default class VSSelectDropDown extends Component {
  constructor(props) {
    super(props);

    this.carrotTop = this.carrotTop.bind(this);
    this.carrotBottom = this.carrotBottom.bind(this);
  }

  carrot(rotate) {
    const {
      carrotStyle,
      carrotColor,
      horizontal,
    } = this.props;

    const container = { ...OBJECT_CARROT_CONTAINER_STYLE };

    switch (horizontal.toLowerCase()) {
      case STRING_POSITION_RIGHT:
        container.justifyContent = 'flex-end';

        break;
      case STRING_POSITION_LEFT:
        container.justifyContent = 'flex-start';

        break;
      case STRING_POSITION_MIDDLE:
        container.justifyContent = 'center';

        break;
      default:
        container.justifyContent = 'flex-end';

        break;
    }

    const style = StyleSheet.create({
      container,
    });

    return (
      <View style={ style.container }>
        <VSSvg.Carrot color={ carrotColor } rotate={ rotate } style={ carrotStyle } />
      </View>
    );
  }

  carrotTop() {
    return this.carrot();
  }

  carrotBottom() {
    return this.carrot('180deg');
  }

  render() {
    const {
      listStyle,
      itemStyle,
      rightIconStyle,
      vertical,
    } = this.props;

    const carrotTop = vertical.toLowerCase() === STRING_POSITION_TOP || vertical.toLowerCase() !== STRING_POSITION_BOTTOM ? this.carrotTop() : null;
    const carrotBottom = vertical.toLowerCase() === STRING_POSITION_BOTTOM ? this.carrotBottom() : null;

    return (
      <View>
        { carrotTop }
        <List style={ listStyle || styles.list }>
          {this.props.list.map((item, i) => {
            return (
              <ListItem
                itemStyle={ itemStyle || styles.itemStyle }
                rightIconStyle={ rightIconStyle || styles.rightIconStyle }
                key={ i }
                { ...item }
              />
            );
          })}
        </List>
        { carrotBottom }
      </View>
    );
  }
}

VSSelectDropDown.propTypes = {
  list: PropTypes.array.isRequired,
  carrotStyle: ViewPropTypes.style,
  listStyle: ViewPropTypes.style,
  itemStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  carrotColor: PropTypes.string,
};

VSSelectDropDown.defaultProps = {
  vertical: STRING_POSITION_TOP,
  horizontal: STRING_POSITION_RIGHT,
  carrotColor: STRING_CARROT_COLOR,
  list: [],
  carrotStyle: {},
  listStyle: {},
  itemStyle: {},
  rightIconStyle: {},
};
