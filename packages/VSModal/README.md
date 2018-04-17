# @vivintsolar-oss/native-vs-modal

``` javascript
yarn add @vivintsolar-oss/native-vs-modal
// or
// npm install @vivintsolar-oss/native-vs-modal
```

## VSModal

A flexible modal component built to our design standards.

## [Demo](https://snack.expo.io/@vslr_oss/vs-modal)

``` javascript
import { ModalBase } from '@vivintsolar-oss/native-vs-modal';

  const nestProps = {
    visible,
    animationType: 'none',
    transparent: true,
    hardwareAccelerated: true,
    actionIcon,
    closeAction,
    mainAction,
    mainActionText: 'Do Stuff',
    secondaryActionText: 'Close',
  };

  <ModalBase { ...nestProps }>
    <View style={ styles.centerPadding }>
      <Image style={ styles.retry } source={ warningIcon } />
      <VSFont.Default style={ styles.normalFont }>Uh oh, looks like there were no thermostats detected.</VSFont.Default>
      <VSFont.Default style={ styles.smallFont }>Add a thermostat device in your Nest account and try again.</VSFont.Default>
      <SubmitButton
        onPress={ this.refetch }
        text={ 'TRY AGAIN' }
      />
    </View>
  </ModalBase>

```

``` javascript
import { ModaPlain } from '@vivintsolar-oss/native-vs-modal';

  const nestProps = {
    visible,
    animationType: 'none',
    transparent: true,
    hardwareAccelerated: true,
  };

  <ModaPlain { ...nestProps }>
    <View style={ styles.centerPadding }>
      <Image style={ styles.retry } source={ warningIcon } />
      <VSFont.Default style={ styles.normalFont }>Uh oh, looks like there were no thermostats detected.</VSFont.Default>
      <VSFont.Default style={ styles.smallFont }>Add a thermostat device in your Nest account and try again.</VSFont.Default>
      <SubmitButton
        onPress={ this.refetch }
        text={ 'TRY AGAIN' }
      />
    </View>
  </ModaPlain>

```

## Props

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| visible | false | boolean | Controls visible state of the modal component |
| children |  | any | Children to be rendered in the body of the modal |
| actionIcon |  | func | Render prop used to display the icon on the bottom left of the footer |
| mainAction |  | func | Main action that's used in the footer on the left side |
| closeAction |  | func | Action used in the footer on the right side |
| mainActionText | Settings | string | Text displayed in the footer on the left side |
| secondaryActionText | Close | string | Text displayed in the footer on the right side |
| header |  | object | Can use to render a header for the modal |
| footer |  | object | Props passed down to the footer component  |
