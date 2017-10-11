import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";
import CheckmarkCircle from "./CheckmarkCircle";
import AltButton from "../AltButton";

const confirmEmail = require("./confirm-email.png");

class ModalAlert extends Component {
  go(route) {
    // Routes to specific route that was passed in as param
    return route;
  }
  render() {
    const { type, text, createText, link } = this.props;

    return (
      <View
        style={
          type === "success" ? styles.successContainer : styles.createContainer
        }
      >
        <View />
        <View style={styles.subContainer}>
          {type === "create" ? (
            <View style={styles.group}>
              <Image source={confirmEmail} />
              <Text style={[styles.createText, styles.text]}>{text}</Text>
            </View>
          ) : (
            <View style={styles.group}>
              <CheckmarkCircle
                style={styles.icon}
                color="#3FBFAD"
                width={40}
                height={40}
              />
              <Text style={[styles.successText, styles.text]}>{text}</Text>
              <Text style={styles.ok}>OK</Text>
            </View>
          )}
        </View>
        {type === "create" ? (
          <AltButton
            onPress={() => {
              return this.go(link);
            }}
            text={createText}
          />
        ) : null}
      </View>
    );
  }
}

ModalAlert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  createText: PropTypes.string,
  link: PropTypes.string,
  history: PropTypes.object
};

export default ModalAlert;

const styles = StyleSheet.create({
  successContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
    backgroundColor: "#e7e7e7"
  },
  createContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
    backgroundColor: "#ffffff"
  },
  subContainer: {
    height: 230,
    width: 270,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 4
  },
  group: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    padding: 20
  },
  text: {
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "transparent",
    textAlign: "center"
  },
  successText: {
    fontSize: 16
  },
  createText: {
    fontSize: 16
  },
  ok: {
    paddingTop: 40,
    fontSize: 16,
    color: "#e7e7e7"
  }
});
