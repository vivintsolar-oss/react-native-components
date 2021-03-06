import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, {
  G,
  Path,
} from 'react-native-svg';

const defaultHeight = 50;
const defaultWidth = 150;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 0,
    flexDirection: 'column',
    width: '100%',
  },
});

export default class SVG extends Component {
  constructor(props) {
    super(props);

    this.width = props.width || defaultWidth;
    this.height = props.height || defaultHeight;
  }

  render() {
    return (
      <View style={ styles.container }>
        <Svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          height={ this.height }
          width={ this.width }
          viewBox="0 0 1500 500"
        >
          <G>
            <G>
              <Path fill="#ff8300" d="M170.8,211.71h50.53l-60.79,138h-45L55,211.71h51.09l32.19,80.8Zm108.56-40.25c0,14.16-11.67,26.1-25.82,26.1s-25.27-11.94-25.27-26.1a25,25,0,0,1,25.27-25.26C267.69,146.19,279.36,157.29,279.36,171.45Zm-50,40.25H278v138H229.37Zm172.7,0h50.26l-60.25,138H346.82l-60.25-138h50.82l32.19,80.8Zm108.56-40.25c0,14.16-11.64,26.1-25.82,26.1s-25.25-11.94-25.25-26.1a25,25,0,0,1,25.25-25.26C499,146.19,510.63,157.29,510.63,171.45Zm-50,40.25h48.85v138H460.67Zm220.17,51.36V349.7H632.26V275c0-12.77-7.23-25.83-24.73-25.83-11.94,0-26.36,6.39-26.36,30V349.7H532.29v-138h48.88v18.05h1.11c10.26-14.16,30-21.1,47.48-21.1C662.51,208.65,680.84,233.36,680.84,263.07Zm84.39-51.36H789.4V252H765.23V349.7H716.38V252H692.51V211.71h23.87V168.4h48.85Zm75,113a25.48,25.48,0,0,1-25.55,25.55c-14.15,0-25.25-11.1-25.25-25.55a25.4,25.4,0,0,1,50.8,0Z" />
              <G>
                <Path fill="#ff8300" d="M960.72,220.37c-2-13-12.75-30.26-37.51-30.26-20,0-34.26,12.76-34.26,29.51,0,12.75,7.75,22.51,22.76,25.76l26.51,5.75c29.76,6.75,46,24.76,46,49.77,0,27.26-23.51,52.52-61.27,52.52-42.76,0-63-27.76-66.27-52.77l23.51-7.5c2,20,15.75,38,42.51,38,24.26,0,36.51-12.5,36.51-28.26,0-12.76-8.5-23.76-26.51-27.51l-25.26-5.5c-25.26-5.75-43.26-21.76-43.26-48.51,0-27.76,25.51-52.77,58.52-52.77,39.76,0,56,24.76,60,44Z" />
                <Path fill="#ff8300" d="M1118,289.4c0,36.76-25.51,64-61.53,64S995,326.16,995,289.4c0-36.51,25.51-63.77,61.52-63.77S1118,252.88,1118,289.4Zm-24,0c0-27.76-17.51-42.76-37.52-42.76s-37.51,15-37.51,42.76c0,28,17.51,43,37.51,43S1094,317.41,1094,289.4Z" />
                <Path fill="#ff8300" d="M1138,349.67V168.61h23.51V349.67Z" />
                <Path fill="#ff8300" d="M1275.82,331.41c-5.75,11.75-18.26,21.51-37.27,21.51-35,0-57-28.51-57-64.27,0-34,23-62.52,57-62.52,21,0,32.76,10.25,36.76,20.26v-17h23.26v98a210.09,210.09,0,0,0,1.25,22.26h-22.75c-.75-2.75-1.25-9-1.25-16.25Zm-35,.75c21.51,0,34.77-18.76,34.77-43.52,0-25-12.76-41.76-34.52-41.76s-35.51,16.75-35.51,41.76C1205.54,313.4,1218.29,332.16,1240.8,332.16Z" />
                <Path fill="#ff8300" d="M1387.59,253.13a73.13,73.13,0,0,0-10.25-.75c-19.76,0-33,10.75-33,37v60.27h-23.51V229.38h23v21c8.5-18.51,24-23,36-23a43.89,43.89,0,0,1,7.75.75Z" />
              </G>
            </G>
            <G>
              <Path fill="#ff8300" d="M1413.99 228.2 1413.99 247.66 1412.06 247.66 1412.06 228.2 1404.73 228.2 1404.73 226.44 1421.32 226.44 1421.32 228.2 1413.99 228.2z" />
              <Path fill="#ff8300" d="M1444.07 230.19 1435.92 247.66 1434.16 247.66 1426.01 230.19 1426.01 247.66 1424.08 247.66 1424.08 226.44 1426.48 226.44 1435.04 244.91 1443.6 226.44 1446 226.44 1446 247.66 1444.07 247.66 1444.07 230.19z" />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}

SVG.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};
