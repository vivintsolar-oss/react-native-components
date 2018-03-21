import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const ZERO_PAD_LIMIT = 9;
const DEFAULT_FONT_SIZE = 72;
const FONT_RATIO = 4;
const MINIMUM_SMALL_FONT_SIZE = 16;

function buildValues(values, contrast, styles) {
  const numbers = [];

  values.forEach((value) => {
    const commonStyles = [styles.value];

    if (contrast) {
      commonStyles.push(styles.contrast);

      if (!value.color) {
        value.color = 'white';
      }
    }


    const valueString = value.value > ZERO_PAD_LIMIT ? `${value.value}` : `0${value.value}`;

    numbers.push(<Text key={`${value.unit}`} style={[...commonStyles, { color: value.color }]}>{valueString}</Text>);
    numbers.push(<Text key={`${value.unit}:`} style={[...commonStyles, styles.numberSpacing]}>{':'}</Text>);

    return value;
  });

  numbers.pop();

  return numbers;
}

function buildLegend(values, contrast, styles) {
  const legend = [];

  values.forEach((value) => {
    const commonStyles = [styles.unit];

    if (contrast) {
      commonStyles.push(styles.contrast);
    }

    legend.push(<Text key={`${value.unit}`} style={[...commonStyles]}>{value.unit.toUpperCase()}</Text>);
    legend.push(<Text key={`${value.unit}:`} style={[...commonStyles, styles.legendSpacing]}>{':'}</Text>);

    return value;
  });

  legend.pop();

  return legend;
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contrast: {
    color: 'white',
  },
  comparison: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legendBottom: {},
  legendTop: {
    top: -2,
    marginBottom: 8,
  },
});

const UI = ({
  title = 'Defaults',
  values = [
    {
      unit: 'defs',
      value: 0,
      color: 'black',
    },
  ],
  legendPosition = 'bottom',
  contrast = false,
  fontMain = 'TradeGothicBold',
  fontSecondary = 'TradeGothicThin',
  fontSize = DEFAULT_FONT_SIZE,
  fontRatio = FONT_RATIO,
  fontMinimum = MINIMUM_SMALL_FONT_SIZE,
  numberSpacing = 1,
  legendSpacing = 2,
}) => {
  const SMALL_FONT = fontSize / fontRatio > fontMinimum ? fontSize / fontRatio : fontMinimum;

  styles.value = {
    fontSize,
    fontFamily: fontMain,
  };

  styles.unit = {
    fontSize: SMALL_FONT,
    fontFamily: fontSecondary,
  };

  styles.title = {
    fontSize: SMALL_FONT,
    fontFamily: fontMain,
    marginBottom: 12,
  };

  styles.numberSpacing = {
    paddingLeft: numberSpacing,
    paddingRight: numberSpacing,
  };

  styles.legendSpacing = {
    paddingLeft: legendSpacing,
    paddingRight: legendSpacing,
  };

  return (
    <View style={ styles.main }>
      <Text style={ contrast ? [ styles.title, styles.contrast ] : styles.title }>{title.toUpperCase()}</Text>
      {
        legendPosition === 'top' &&
        <View style={ [ styles.comparison, styles.legendTop ] }>
          {buildLegend(values, contrast, styles)}
        </View>
      }
      <View style={ styles.comparison }>
        {buildValues(values, contrast, styles)}
      </View>
      {
        legendPosition === 'bottom' &&
        <View style={ [ styles.comparison, styles.legendBottom ] }>
          {buildLegend(values, contrast, styles)}
        </View>
      }
    </View>
  );
};

UI.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
  legendPosition: PropTypes.string,
  contrast: PropTypes.bool,
  fontMain: PropTypes.string,
  fontSecondary: PropTypes.string,
  fontSize: PropTypes.number,
  fontRatio: PropTypes.number,
  fontMinimum: PropTypes.number,
  numberSpacing: PropTypes.number,
  legendSpacing: PropTypes.number,
};

export default UI;
