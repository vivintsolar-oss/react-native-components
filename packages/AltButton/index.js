import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AltButton(props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

AltButton.propTypes = {
  text: PropTypes.string
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FF8200",
    backgroundColor: "#ffffff",
    padding: 10,
    alignSelf: "center",
    alignItems: "center"
  },
  buttonText: {
    paddingLeft: 10,
    paddingRight: 10,
    color: "#4a4a4a"
  }
});
