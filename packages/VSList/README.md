# @vivintsolar-oss/native-vs-list

``` javascript
yarn add @vivintsolar-oss/native-vs-list
// or
// npm install @vivintsolar-oss/native-vs-list
```

## VSList

A flexible list component

## [Demo](https://snack.expo.io/@vslr_oss/vs-list)

``` javascript
import { List, ListItem } from '@vivintsolar-oss/native-vs-list';

<List>
  <ListItem
    label="Yoda"
    itemStyle={styles.itemStyle}
    rightIconStyle={styles.icon}
    rightIcon={() => {
      return <RightChevron color={'green'} />;
    }}
    onPress={() => {
      return Alert.alert('Press you did');
    }}
  />
  <ListItem
    label="Vader"
    itemStyle={styles.itemStyle}
    leftIconStyle={styles.icon}
    labelTextStyle={styles.center}
    leftIcon={() => {
      return <LeftChevron color={'red'} />;
    }}
    rightIcon={null}
  />
  <ListItem
    label="Worst Character"
    renderLabel={() => {
      return <Text>Jar Jar</Text>;
    }}
    itemStyle={styles.rightPadding}
    rightIconStyle={styles.icon}
    rightIcon={null}
    onPress={() => {
      return Alert.alert('💩');
    }}
  />
</List>
```

## Props

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| label |  | string | Text used within the list item |
| itemHeight | 48 | number | Height of list item |
| itemStyle |  | object | Custom style passed to list item |
| labelTextStyle |  | object | Custom style passed to label text |
| leftIconStyle |  | object | Custom style passed to left icon |
| rightIconStyle |  | object | Custom style passed to right icon |
| containerStyle |  | object | Custom style passed to list |
| bgColor |  | string | Background color of list |
| leftIcon | null | func | Render prop |
| rightIcon | `() => <RightChevron />` | func | Render prop |
| renderLabel | null | func | Render prop |
| onPress |  | func | Event that's fired when list item is pressed. If none is passed then list item will not be `Touchable` |
