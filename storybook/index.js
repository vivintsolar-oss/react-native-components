import { getStorybookUI, configure } from '@storybook/react-native';
import { Font } from 'expo';
import './addons';

const TradeGothicBold = require('../assets/fonts/TradeGothicLTStd-BdCn20.otf');
const TradeGothicThin = require('../assets/fonts/TradeGothicLTStd-Cn18.otf');

Font.loadAsync({ TradeGothicBold });
Font.loadAsync({ TradeGothicThin });

// import stories
configure(() => {
  require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'Tunnel',
  onDeviceUI: true,
});

export default StorybookUI;
