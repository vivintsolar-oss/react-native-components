# @vivintsolar-oss/native-vs-app-link

``` javascript
yarn add @vivintsolar-oss/native-vs-app-link
// or
// npm install @vivintsolar-oss/native-vs-app-link
```

## VSAppLink

A handy little method that will default to the app store if an app that you want to deep link into is not installed on the device.

## [Demo](https://snack.expo.io/@vslr_oss/vs-app-link)

### openOnDevice

``` javascript
import VSAppLink from '@vivintsolar-oss/native-vs-app-link';

const config = {
  appName: 'Vivint Solar',
  appStoreId: 'id1289441541',
  playStoreId: 'com.vivintsolar.hea',
  appStoreLocale: 'us',
};

VSAppLink.openOnDevice('vslr://+', config)

```

### openInStore

``` javascript
import VSAppLink from '@vivintsolar-oss/native-vs-app-link';

const config = {
  appStoreId: 'id1289441541',
  playStoreId: 'com.vivintsolar.hea',
};

VSAppLink.openInStore(config)

```

## Props

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| url |  | string | The schema link to the native app you want to deep link into |
| appName |  | string | Used as the value used in a thrown error |
| appStoreId |  | string | ID from the Apple App Store |
| playStoreId |  | string | ID from the Google Play Store |
| appStoreLocale | us | string | Used to specify if the app is only available in the App Store outside of the `us`. |

## Store ID's

`appStoreId` can be found in the developer console of itunes but the most common way to find it is via the app store itself via the url. For example for this app, `https://itunes.apple.com/us/app/vivint-solar/id1289441541?mt=8` the `appStoreId` would be `id1289441541`

`playStoreId` can be found in a similar manner, so for `https://play.google.com/store/apps/details?id=com.vivintsolar.hea` the `playStoreId` would be `com.vivintsolar.hea`
