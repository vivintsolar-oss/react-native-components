import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legend: {
    fontSize: 14,
    paddingLeft: 2,
    paddingRight: 2,
  },
});

const Legend = ({
  data,
  style,
}) => {
  return (
    <View style={ defaultStyles.row }>
      {
        data.reduce((arr, item, index) => {
          return [
            ...arr,
            <Text key={ item.unit } style={ [ defaultStyles.legend, style ] }>{ item.unit.toUpperCase() }</Text>,
            index < data.length - 1 && <Text key={ `${ item.unit }:` } style={ [ defaultStyles.legend, style ] }>{ ':' }</Text>,
          ];
        }, [])
      }
    </View>
  );
};

Legend.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
};

export default Legend;
