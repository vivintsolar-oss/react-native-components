import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import VSButton from '@vivintsolar-oss/native-vs-button';
import VSInput from '@vivintsolar-oss/native-vs-input';
import VSModal from '@vivintsolar-oss/native-vs-modal';
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
});
