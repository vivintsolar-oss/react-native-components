# @vivintsolar-oss/native-vs-select

``` javascript
yarn add @vivintsolar-oss/native-vs-select
// or
// npm install @vivintsolar-oss/native-vs-select
```

## VSSelect

A flexible drop down select component

## [Demo](https://snack.expo.io/@vslr_oss/vs-select)

``` javascript
import { Input, Form } from '@vivintsolar-oss/native-vs-select';

<View style={ { width: '100%', height: 500 } }>
  <VSSelect.Form
    dropDownList={ list }
    showDropDown={ state.toggleDropDown }
    carrotHorizontal={ 'left' }
    carrotVertical={ 'top' }
    carrotStyle={
    {
      paddingLeft: 15,
    }
    }
  >
    <VSSelect.Input
      VSForm
      action={ this.toggleDropDown }
      editable={ false }
      label="VS Select Form"
    />
    <View>
      <View style={ styles.absolute }>
        <VSButton text="SUBMIT" />
      </View>
    </View>
  </VSSelect.Form>
</View>

```

## Props

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| VSForm |  | string |  |
| dropDownList |  | object |  |
| showDropDown |  | object |  |
| editable |  | object |  |
| carrotColor | 'white' | string | Controls the color of the carrot. |
| carrotVertical | 'top' | string | Controls the horizontal position of the carrot. Accepted values includes: `left`, `middle`, or `right`. |
| carrotHorizontal | 'right' | string | Controls the vertical position of the carrot. Accepted values includes: `top` or `bottom`. |
| carrotStyle | {} | object | This will extend the styles applied to the carrot container. A case for this is to change the right/left padding of the carrot's horizontal position. |
