# @vivintsolar-oss/native-vs-input

```
yarn add @vivintsolar-oss/native-vs-input
// or
// npm install @vivintsolar-oss/native-vs-input
```


## VSInput

Our input field adds some useful state changes along with keeping the look and feel consistent across multiple native apps.

``` javascript
import VSInput from '@vivintsolar-oss/native-vs-input';

  <VSInput
    password
    label="Password"
    reference={ (input) => {
      this.passwordInput = input;
    } }
    error={ this.state.error }
    autoCorrect={ false }
    onChangeText={ this.onPasswordChange }
    onSubmitEditing={ this.submit }
    returnKeyType="send"
    defaultValue={ this.state.password }
  />

```

## Props

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| label | label | string | The text for your label |
| reference |  | function | Ref function used to hoist state |
| info |  | boolean | Shows the info state |
| error |  | string | The error message displayed & shows error state |
| password |  | boolean | Shows the password state |
| toggle |  | function | Used to toggle state for more info icon (like a modal/alert) |

You can also add any other props available to the [react native TextInput component](https://facebook.github.io/react-native/docs/textinput.html#props)