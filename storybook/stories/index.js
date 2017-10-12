import React from "react";
import { View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import VSButton from "@vivintsolar-oss/native-vs-button";
import VSInput from "@vivintsolar-oss/native-vs-input";
import VSModal from "@vivintsolar-oss/native-vs-alert";
import CenterView from "./CenterView";

import Welcome from "./Welcome";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("VSButton")} />
));

storiesOf("Buttons", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Submit", () => {
    return <VSButton text="SUBMIT" onPress={action("clicked-submit")} />;
  })
  .add("Alternate", () => {
    return (
      <VSButton outline text="Do Something" onPress={action("clicked-alt")} />
    );
  });

storiesOf("Forms", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Input", () => {
    return (
      <View style={{ width: "80%" }}>
        <VSInput
          label="New Input"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChange={action("keypressed")}
        />
      </View>
    );
  })
  .add("Input Error", () => {
    return (
      <View style={{ width: "80%" }}>
        <VSInput
          label="New Input"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          error={"Oops"}
          onChange={action("keypressed")}
        />
      </View>
    );
  });
storiesOf("Modal", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Alert", () => {
    return (
      <VSModal
        type="success"
        text={"Every little thing is gonna be alright."}
        createText="OK"
      />
    );
  })
  .add("Create", () => {
    return (
      <VSModal
        type="create"
        text={"Way to go, looks like you did something right for a change!"}
        createText="Go Back"
        link="/"
      />
    );
  });
