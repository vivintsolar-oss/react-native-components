import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import Touchable from "@vivintsolar-oss/touchable";

export default class SubmitButton extends Component {
  render() {
    const containerStyles = [styles.button];

    if (this.props.style) {
      containerStyles.push(this.props.style);
    }

    return (
      <Touchable style={containerStyles} {...this.props}>
        <Text style={styles.buttonText}>
          {this.props.text ? this.props.text : "CLICK ME"}
        </Text>
      </Touchable>
    );
  }
}
SubmitButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "#FF8200",
    padding: 10,
    width: "auto",
    alignSelf: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff"
  }
});
