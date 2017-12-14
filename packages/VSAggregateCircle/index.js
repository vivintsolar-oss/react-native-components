import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryPie, VictoryLabel, VictoryContainer } from 'victory-native';

const colorSchemes = {
  lease: '#b7c508',
  ppa: '#fa6a02',
  cash: '#9b9b9b',
  loan: '#56c1e6',
};

const INNER_RADIUS_OFFSET = 60;
const INNER_LABEL_OFFSET_Y_SCALE = 0.7;
const OUTER_LABEL_OFFSET_SCALE = 0.93;
const OUTER_LABEL_SCALE = 0.075;

export default class VSAggregateCircle extends Component {
  render() {
    const { data, diameter, label, onClick } = this.props;

    const formattedData = Object.entries(data).map(([ key, value ]) => {
      return { type: key, value };
    });
    const colorScale = formattedData.map(({ type }) => {
      return colorSchemes[type];
    });
    const sumText = formattedData.reduce((acc, { value }) => {
      return acc + value;
    }, 0);
    const radius = diameter / 2;
    const innerRadius = radius - INNER_RADIUS_OFFSET;

    return (
      <VictoryContainer width={ diameter } height={ diameter } events={ { onTouchStart: onClick } }>
        <VictoryPie
          data={ formattedData }
          colorScale={ colorScale }
          width={ diameter }
          height={ diameter }
          innerRadius={ innerRadius }
          labels={ [] }
          standalone={ false }
          x="type"
          y="value"
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="end"
          x={ radius }
          y={ radius * INNER_LABEL_OFFSET_Y_SCALE }
          style={ { fontSize: radius - INNER_RADIUS_OFFSET } }
          text={ sumText }
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="end"
          x={ radius }
          y={ diameter * OUTER_LABEL_OFFSET_SCALE }
          style={ { fontSize: diameter * OUTER_LABEL_SCALE } }
          text={ label }
        />
      </VictoryContainer>
    );
  }
}

VSAggregateCircle.propTypes = {
  data: PropTypes.object.isRequired,
  diameter: PropTypes.number,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
VSAggregateCircle.defaultProps = {
  diameter: 400,
  label: '',
  onClick: () => {}, // eslint-disable-line no-empty-function
};
