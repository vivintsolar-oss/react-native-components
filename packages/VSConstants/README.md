# @vivintsolar-oss/native-vs-constants

```
yarn add @vivintsolar-oss/native-vs-constants
// or
// npm install @vivintsolar-oss/native-vs-constants
```


## Constant

These are the Layout & Color constants that we use to make styles consistent among native apps.

``` javascript
import Colors from '@vivintsolar-oss/native-vs-constants/Colors';
import Layout from '@vivintsolar-oss/native-vs-constants/Layout';

input: {
  width: Layout.window.width,
  height: 48,
  borderWidth: 1,
  borderRadius: 4,
  marginVertical: Layout.EDGE_PADDING,
  padding: Layout.INNER_PADDING,
  borderColor: Colors.BORDER_GRAY,
}

```

## Colors
Brand specific UI colors

| Name | Value |
|:----- |:----------- |
| ORANGE | <span style="color: #FF8200">#FF8200</span> |
| BLACK | <span style="color: #1F2123">#1F2123</span> |
| DARK_GRAY | <span style="color: #4a4a4a">#4a4a4a</span> |
| MEDIUM_GRAY | <span style="color: #656769">#656769</span> |
| LIGHT_GRAY | <span style="color: #979797">#979797</span> |
| BORDER_GRAY | <span style="color: #D9DADB">#D9DADB</span> |
| LIGHTER_GRAY | <span style="color: #e7e7e7">#e7e7e7</span> |
| BACKGROUND_GRAY | <span style="color: #EDEEEF">#EDEEEF</span> |
| OFF_WHITE | <span style="color: #f7f8f8">#f7f8f8</span> |
| WHITE | <span style="color: #ffffff">#ffffff</span> |
| BLUE | <span style="color: #3FBFAD">#3FBFAD</span> |
| LOGO_ORANGE | <span style="color: #FF4E00">#FF4E00</span> |
| PRIMARY | <span style="color: #3FBFAD">#3FBFAD</span> |
| PRODUCTION | <span style="color: #3FBFAD">#3FBFAD</span> |
| CONSUMPTION | <span style="color: #979797">#979797</span> |
| BATTERY_USE | <span style="color: #57c1e8">#57c1e8</span> |
| BATTERY_CHARGE | <span style="color: #3ba126">#3ba126</span> |
| BATTERY_EXPORT | <span style="color: #97d7ce">#97d7ce</span> |
| GRID_USE | <span style="color: #e96565">#e96565</span> |
| ERROR | <span style="color: #E74C3C">#E74C3C</span> |

## Layout
 Deals mostly with pixel related values like height, width, margin, & padding.

| Name | Value |
|:----- |:----------- |
| OUTER_PADDING | 20 |
| INNER_PADDING | 20 |
| EDGE_PADDING | 20 |
| ICON_GAP | 10 |
| window.width | represents the full width of the device |
| window.height | represents the full height of the device |
