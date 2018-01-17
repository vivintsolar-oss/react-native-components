import { Dimensions } from 'react-native';

const NORMAL_WIDTH = 375;
const OUTER_PADDING = 20;
const INNER_PADDING = 30;
const EDGE_PADDING = 20;
const ICON_GAP = 10;

export default {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  isSmallDevice: Dimensions.get('window').width < NORMAL_WIDTH,
  OUTER_PADDING,
  INNER_PADDING,
  EDGE_PADDING,
  ICON_GAP,
};
