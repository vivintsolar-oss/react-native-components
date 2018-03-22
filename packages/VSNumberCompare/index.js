import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

const defaultStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legend: {
    fontSize: 14,
    fontFamily: 'TradeGothicThin',
    paddingLeft: 2,
    paddingRight: 2,
  },
  number: {
    fontSize: 72,
    fontFamily: 'TradeGothicBold',
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
  },
  legendTop: {
    top: -2,
    marginBottom: 8,
  },
})

const Wrapper = ({
  data = [
    {
      unit: 'defs',
      value: 0,
      color: 'black',
    },
  ],
  style = null,
  children,
}) => (
  <View style={[ defaultStyles.wrapper, style ]}>
    {React.Children.map(children, child => React.cloneElement(child, { data }))}
  </View>
)

Wrapper.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
  children: PropTypes.any,
}

const Numbers = ({
  data,
  style,
}) => (
  <View style={defaultStyles.row}>
    {
      data.reduce((arr, item, index) => ([
        ...arr,
        <Text key={item.unit} style={[ defaultStyles.number, style, { color: item.color } ]}>{ numberPad(item.value) }</Text>,
        index < data.length - 1 && <Text key={`${item.unit}:`} style={[ defaultStyles.number, style ]}>{ ':' }</Text>,
      ]), [])
    }
  </View>
)

Numbers.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
}

const Legend = ({
  data,
  style,
}) => (
  <View style={defaultStyles.row}>
    {
      data.reduce((arr, item, index) => ([
        ...arr,
        <Text key={item.unit} style={[ defaultStyles.legend, style ]}>{ item.unit.toUpperCase() }</Text>,
        index < data.length - 1 && <Text key={`${item.unit}:`} style={[ defaultStyles.legend, style ]}>{ ':' }</Text>,
      ]), [])
    }
  </View>
)

Legend.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
}

function numberPad(number) {
  if (number < 10) {
    return `0${ number }`
  }
  return `${ number }`
}

export default {
  Wrapper,
  Numbers,
  Legend,
}
