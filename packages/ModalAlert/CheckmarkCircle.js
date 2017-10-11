import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";

class CheckmarkCircle extends Component {
  render() {
    return (
      <Svg
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 25 25"
      >
        <G
          id="Checkmark_Circle"
          transform={{ translate: "(-1190 -475)" }}
          fill={this.props.color}
        >
          <Path d="M 12.5 25C 5.60999 25 0 19.39 0 12.5C 0 5.60999 5.60999 0 12.5 0C 19.39 0 25 5.60999 25 12.5C 25 19.39 19.39 25 12.5 25ZM 12.5 1C 6.16003 1 1 6.16 1 12.5C 1 18.84 6.16003 24 12.5 24C 18.84 24 24 18.84 24 12.5C 24 6.16 18.84 1 12.5 1ZM 10.14 16.85C 10.23 16.95 10.36 17 10.49 17C 10.62 17 10.74 16.95 10.84 16.85L 19.35 8.34L 18.64 7.63L 10.49 15.78L 7.35999 12.65L 6.65002 13.36L 10.14 16.85Z" />
        </G>
      </Svg>
    );
  }
}

CheckmarkCircle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

CheckmarkCircle.defaultProps = {
  width: 25,
  height: 25,
  color: "black"
};

export default CheckmarkCircle;
