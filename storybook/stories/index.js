import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import VSSelect from '../../packages/VSSelect';
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
          <VSNumberCompare.Wrapper>
            <VSNumberCompare.Legend style={ { height: 14 } } />
            <VSNumberCompare.Numbers style={ { height: 72 } } />
          </VSNumberCompare.Wrapper>
        </View>
        <View style={ styles.wrapper }>
          <VSNumberCompare.Wrapper
            data={ values1 }
          >
            <VSNumberCompare.Legend
              style={ {
                fontSize: 16,
                height: 16,
              } }
            />
            <VSNumberCompare.Numbers
              style={ {
                fontSize: 72,
                height: 72,
                paddingTop: 1,
              } }
            />
          </VSNumberCompare.Wrapper>
        </View>
        <View style={ [ styles.wrapper, styles.contrast ] }>
          <VSNumberCompare.Wrapper
            data={ values2 }
          >
            <VSNumberCompare.Numbers
              style={ {
                color: 'white',
                paddingTop: 1,
              } }
            />
            <VSNumberCompare.Legend
              style={ {
                fontSize: 14,
                paddingLeft: 2,
                paddingRight: 2,
                color: 'white',
              } }
            />
          </VSNumberCompare.Wrapper>
        </View>
        <View style={ [ styles.wrapper ] }>
          <VSNumberCompare.Wrapper
            data={ values3 }
          >
            <VSNumberCompare.Numbers
              style={ {
                fontSize: 48,
              } }
            />
            <VSNumberCompare.Legend
              style={ {
                fontSize: 18,
                paddingLeft: 8,
                paddingRight: 8,
              } }
            />
          </VSNumberCompare.Wrapper>
        </View>
      </View>
    );
  });

storiesOf('Select', module)
  .addDecorator((getStory) => {
    return <CenterView>{getStory()}</CenterView>;
  })
  .add('Input', () => {
    const list = [
      {
        label: 'None',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('None');
        },
      },
      {
        label: 'WEP',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('WEP');
        },
      },
      {
        label: 'WPA',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('WPA');
        },
      },
      {
        label: 'EAP',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('EAP');
        },
      },
    ];

    return (
      <View style={ [ styles.wrapper, styles.lightContrast ] }>
        <View style={ { width: '100%', height: 500 } }>
          <VSSelect.Input
            dropDownList={ list }
            editable={ false }
            label="VS Select Input"
          />
        </View>
      </View>
    );
  })
  .add('Form', () => {
    const list = [
      {
        label: 'None',
        labelTextStyle: [ styles.center, { fontSize: 12 } ],
        rightIcon: null,
        onPress: () => {
          Alert.alert('None');
        },
      },
      {
        label: 'WEP',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('WEP');
        },
      },
      {
        label: 'WPA',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('WPA');
        },
      },
      {
        label: 'EAP',
        labelTextStyle: styles.center,
        rightIcon: null,
        onPress: () => {
          Alert.alert('EAP');
        },
      },
    ];

    class VSSelectFormStory extends React.Component {
      constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);

        this.state = {
          showDropDown: false,
        };
      }

      toggleDropDown() {
        return this.setState({ showDropDown: !this.state.showDropDown });
      }

      render() {
        return (
          <VSSelect.Form
            listStyle={ { width: 250 } }
            itemStyle={ { backgroundColor: 'gray' } }
            dropDownList={ list }
            showDropDown={ this.state.showDropDown }
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
              editable={ false }
              label="VS Select Form"
              action={ this.toggleDropDown }
            />
            <View>
              <View style={ styles.absolute }>
                <VSButton text="SUBMIT" />
              </View>
            </View>
          </VSSelect.Form>
        );
      }
    }

    return (
      <View style={ [ styles.wrapper, styles.lightContrast ] }>
        <View style={ { width: '100%', height: 500, paddingHorizontal: 20 } }>
          <VSSelectFormStory />
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
  lightContrast: {
    backgroundColor: '#f3f3f3',
  },
  absolute: {
    position: 'absolute',
    top: 10,
    width: '100%',
  },
  center: {
    textAlign: 'center',
  },
});
