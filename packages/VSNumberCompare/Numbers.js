import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 72,
    paddingLeft: 1,
    paddingRight: 1,
  },
});

const Numbers = ({
  data,
  style,
}) => {
  return (
    <View style={ defaultStyles.row }>
      {
        data.reduce((arr, item, index) => {
          return [
            ...arr,
            <Text key={ item.unit } style={ [ defaultStyles.number, style, { color: item.color } ] }>{ numberPad(item.value) }</Text>,
            index < data.length - 1 && <Text key={ `${ item.unit }:` } style={ [ defaultStyles.number, style ] }>{ ':' }</Text>,
          ];
        }, [])
      }
    </View>
  );
};

Numbers.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
};

const NO_PAD = 10;

function numberPad(number) {
  if (number < NO_PAD) {
    return `0${ number }`;
  }

  return `${ number }`;
}

export default Numbers;
