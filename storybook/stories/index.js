import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import VSNumberCompare from '../../packages/VSNumberCompare';
import VSAggregateCircle from '../../packages/VSAggregateCircle';
import VSButton from '../../packages/VSButton';
import VSCollapsible from '../../packages/VSCollapsible';
import VSInput from '../../packages/VSInput';
import VSModal from '../../packages/VSModal';
import VSSwipe from '../../packages/VSSwipe';
import VSSvg from '../../packages/VSSvg';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => {
  return <Welcome showApp={ linkTo('VSButton') } />;
});

storiesOf('Dashboards', module)
  .addDecorator((getStory) => {
    return <CenterView>{ getStory() }</CenterView>;
  })
  .add('VSNumberCompare', () => {
    const values1 = [
      {
        unit: 'win',
        value: 12,
      },
      {
        unit: 'loss',
        value: 3,
      },
    ];

    const values2 = [
      {
        unit: 'ac',
        value: 15,
        color: 'red',
      },
      {
        unit: 'wc',
        value: 12,
        color: 'white',
      },
      {
        unit: 'sales (ps)',
        value: 3,
        color: 'blue',
      },
    ];

    const values3 = [
      {
        unit: 'one',
        value: 0,
        color: 'red',
      },
      {
        unit: 'two',
        value: 6,
        color: 'orange',
      },
      {
        unit: 'thr',
        value: 10,
        color: 'yellow',
      },
      {
        unit: 'for',
        value: 25,
        color: 'green',
      },
      {
        unit: 'fiv',
        value: 75,
        color: 'blue',
      },
    ];

    return (
      <View style={ styles.wrapper }>
        <View style={ styles.wrapper }>
          <VSNumberCompare />
        </View>
        <View style={ styles.wrapper }>
          <VSNumberCompare
            values={ values1 }
            title="Welcome Calls"
            legendPosition="top"
            numberSpacing={ 15 }
            fontSize={ 42 }
            fontRatio={ 3 }
          />
        </View>
        <View style={ [ styles.wrapper, styles.contrast ] }>
          <VSNumberCompare
            values={ values2 }
            title="Weekly Average"
            legendPosition="bottom"
            contrast
          />
        </View>
        <View style={ [ styles.wrapper ] }>
          <VSNumberCompare
            values={ values3 }
            title="Random Stuff"
            legendPosition="bottom"
            fontSize={ 54 }
            fontRatio={ 3 }
            legendSpacing={ 16 }
          />
        </View>
      </View>
    );
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

storiesOf('Charts', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Aggregate Pie', () => {
    const data = { loan: 5, ppa: 4, lease: 3, cash: 1 };

    return (
      <View style={ styles.wrapper }>
        <Text style={ styles.header }>VSAggregatePie</Text>
        <VSAggregateCircle diameter={ 400 } data={ data } label="WC" />
        <Text />
      </View>
    );
  });

storiesOf('Collapsible', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Default', () => {
    return (
      <View style={ styles.wrapper }>
        <VSCollapsible>
          <View>
            <Text>Just some sample text</Text>
          </View>
        </VSCollapsible>
      </View>
    );
  })
  .add('With always visible content', () => {
    const alwaysVisible = <Text>I'll always be here</Text>;

    return (
      <View style={ styles.wrapper }>
        <VSCollapsible alwaysVisible={ alwaysVisible }>
          <View>
            <Text>Just some sample text</Text>
          </View>
        </VSCollapsible>
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
  .add('Info', () => {
    return (
      <View style={ [ styles.formWrapper ] }>
        <Text style={ styles.header }>VSInput</Text>
        <View style={ { width: '100%' } }>
          <VSInput
            info
            toggle={ () => {
              return Alert.alert('Some explination that will make provide more information');
            } }
            label="Something Potentially Confusing"
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
  .add('Password', () => {
    return (
      <View style={ [ styles.formWrapper ] }>
        <Text style={ styles.header }>VSInput</Text>
        <View style={ { width: '100%' } }>
          <VSInput
            password
            label="Sensitive Data"
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
            label="Error Input"
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
  .add('Add', () => {
    return (
      <VSSvg.AddIcon />
    );
  })
  .add('Alert Fill', () => {
    return (
      <VSSvg.AlertFillIcon />
    );
  })
  .add('Call Fill', () => {
    return (
      <VSSvg.CallFillIcon />
    );
  })
  .add('Call', () => {
    return (
      <VSSvg.CallIcon />
    );
  })
  .add('Chart Fill', () => {
    return (
      <VSSvg.ChartFillIcon />
    );
  })
  .add('Chart', () => {
    return (
      <VSSvg.ChartIcon />
    );
  })
  .add('Checkmark Circle', () => {
    return (
      <VSSvg.CheckmarkCircleIcon />
    );
  })
  .add('Checkmark Circle Fill', () => {
    return (
      <VSSvg.CheckmarkCircleFillIcon />
    );
  })
  .add('Circle Fill', () => {
    return (
      <View>
        <VSSvg.CircleFillIcon />
      </View>
    );
  })
  .add('Close', () => {
    return (
      <View>
        <VSSvg.CloseIcon />
      </View>
    );
  })
  .add('Coal Fill', () => {
    return (
      <View>
        <VSSvg.CoalFillIcon />
      </View>
    );
  })
  .add('Eye Fill', () => {
    return (
      <View>
        <VSSvg.EyeFillIcon />
      </View>
    );
  })
  .add('Eye', () => {
    return (
      <View>
        <VSSvg.EyeIcon />
      </View>
    );
  })
  .add('Fuel Tank', () => {
    return (
      <View>
        <VSSvg.FuelTankFillIcon />
      </View>
    );
  })
  .add('Gas Fill', () => {
    return (
      <View>
        <VSSvg.GasFillIcon />
      </View>
    );
  })
  .add('Group Fill', () => {
    return (
      <View>
        <VSSvg.GroupFillIcon />
      </View>
    );
  })
  .add('Home Fill', () => {
    return (
      <View>
        <VSSvg.HomeFillIcon />
      </View>
    );
  })
  .add('Home', () => {
    return (
      <View>
        <VSSvg.HomeIcon />
      </View>
    );
  })
  .add('Info Fill', () => {
    return (
      <View>
        <VSSvg.InfoFillIcon />
      </View>
    );
  })
  .add('Left Chevron', () => {
    return (
      <View>
        <VSSvg.LeftChevron />
      </View>
    );
  })
  .add('No View Fill', () => {
    return (
      <View>
        <VSSvg.NoViewFillIcon />
      </View>
    );
  })
  .add('No View', () => {
    return (
      <View>
        <VSSvg.NoViewIcon />
      </View>
    );
  })
  .add('Pencil Fill', () => {
    return (
      <View>
        <VSSvg.PencilFillIcon />
      </View>
    );
  })
  .add('Pine Tree', () => {
    return (
      <View>
        <VSSvg.PineTreeFillIcon />
      </View>
    );
  })
  .add('Propane Fill', () => {
    return (
      <View>
        <VSSvg.PropaneFillIcon />
      </View>
    );
  })
  .add('Recycle Fill', () => {
    return (
      <View>
        <VSSvg.RecycleFillIcon />
      </View>
    );
  })
  .add('Right Chevron', () => {
    return (
      <View>
        <VSSvg.RightChevron />
      </View>
    );
  })
  .add('Send', () => {
    return (
      <View>
        <VSSvg.SendIcon />
      </View>
    );
  })
  .add('Settings Fill', () => {
    return (
      <View>
        <VSSvg.SettingsFillIcon />
      </View>
    );
  })
  .add('Sign Out', () => {
    return (
      <View>
        <VSSvg.SignOutIcon />
      </View>
    );
  })
  .add('Thumbprint', () => {
    return (
      <View>
        <VSSvg.ThumbprintIcon />
      </View>
    );
  })
  .add('Trash Fill', () => {
    return (
      <View>
        <VSSvg.TrashFillIcon />
      </View>
    );
  })
  .add('Warning Fill', () => {
    return (
      <View>
        <VSSvg.WarningFillIcon />
      </View>
    );
  })
  .add('Warning', () => {
    return (
      <View>
        <VSSvg.WarningIcon />
      </View>
    );
  })
  .add('VSLogo', () => {
    return (
      <View>
        <VSSvg.VSLogo />
      </View>
    );
  })
  ;

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
  contrast: {
    backgroundColor: '#202122',
  },
});
