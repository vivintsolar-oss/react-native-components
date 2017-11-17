import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import VSButton from '../../packages/VSButton';
import VSInput from '../../packages/VSInput';
import VSModal from '../../packages/VSModal';
import VSSwipe from '../../packages/VSSwipe';
import VSSvg from '../../packages/VSSvg';
import CenterView from './CenterView';
import Welcome from './Welcome';


storiesOf('Welcome', module).add('to Storybook', () => {
  return <Welcome showApp={ linkTo('VSButton') } />;
});

storiesOf('Buttons', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Default', () => {
    return (
      <View style={ styles.wrapper }>
        <Text style={ styles.header }>VSButton</Text>
        <VSButton text="SUBMIT" onPress={ action('clicked-default-button') } />
        <Text />
      </View>
    );
  })
  .add('Outline', () => {
    return (
      <View style={ styles.wrapper }>
        <Text style={ styles.header }>VSButton outline</Text>
        <VSButton
          outline
          text="Do Something"
          onPress={ action('clicked-outline-button') }
        />
        <Text />
      </View>
    );
  });

storiesOf('Input', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Default', () => {
    return (
      <View style={ [ styles.formWrapper ] }>
        <Text style={ styles.header }>VSInput</Text>
        <View style={ { width: '100%' } }>
          <VSInput
            label="New Input"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={ false }
            onChange={ action('keypressed') }
          />
        </View>
        <Text />
      </View>
    );
  })
  .add('Error', () => {
    return (
      <View style={ [ styles.formWrapper ] }>
        <Text style={ styles.header }>VSInput Error</Text>
        <View style={ { width: '100%' } }>
          <VSInput
            label="New Input"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={ false }
            error={ 'Oops' }
            onChange={ action('keypressed') }
          />
        </View>
        <Text />
      </View>
    );
  });
storiesOf('Modal', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Success', () => {
    return (
      <View style={ [ styles.modalWrapper ] }>
        <VSModal
          type="success"
          text={ 'Every little thing is gonna be alright.' }
          createText="OK"
        />
      </View>
    );
  })
  .add('Create', () => {
    return (
      <View style={ [ styles.modalWrapper ] }>
        <VSModal
          type="create"
          text={ 'Way to go, looks like you did something right for a change!' }
          createText="Go Back"
          link="/"
        />
      </View>
    );
  });
storiesOf('Swipeable', module)
  .addDecorator((getStory) => {
    return <CenterView>{ getStory() }</CenterView>;
  })
  .add('Images', () => {
    return (
      <View style={ styles.swipeWrapper }>
        <VSSwipe>
          <Image
            source={ { uri: 'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png' } }
            style={ { width: Dimensions.get('window').width } }
          />
          <Image
            source={ { uri: 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg' } }
            style={ { width: Dimensions.get('window').width } }
          />
        </VSSwipe>
      </View>
    );
  })
  .add('Generic Views', () => {
    return (
      <View style={ styles.swipeWrapper }>
        <VSSwipe>
          <View
            style={ { backgroundColor: 'crimson', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'aliceblue', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'papayawhip', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'rebeccapurple', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'darkseagreen', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'darkorange', width: Dimensions.get('window').width } }
          />
          <View
            style={ { backgroundColor: 'oldlace', width: Dimensions.get('window').width } }
          />
        </VSSwipe>
      </View>
    );
  });
storiesOf('SVG', module)
  .addDecorator((getStory) => {
    return <CenterView>{ getStory() }</CenterView>;
  })
  .add('Circle', () => {
    return (
      <View>
        <VSSvg.CircleFillIcon />
      </View>
    );
  });

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  formWrapper: {
    width: '100%',
    height: '100%',
    padding: 40,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    padding: 0,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  swipeWrapper: {
    width: Dimensions.get('window').width,
    height: '100%', // You can set any height here and the component should react
  },
});
