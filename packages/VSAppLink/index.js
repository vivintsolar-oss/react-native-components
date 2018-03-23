import { Linking, Platform } from 'react-native';

export const openOnDevice = (url, {
  appName,
  appStoreId,
  appStoreLocale,
  playStoreId,
  downloadLink,
}) => {
  Linking.openURL(url)
    .catch((err) => {
      if (err.code === 'EUNSPECIFIED') {
        if (downloadLink) {
          return openInBrowser(downloadLink);
        }

        return openInStore({
          appStoreId,
          appStoreLocale,
          playStoreId,
        });
      }

      throw new Error(`Could not open ${ appName }. ${ err.toString() }`);
    });
};

export const openInStore = ({
  appStoreId,
  appStoreLocale,
  playStoreId,
}) => {
  if (Platform.OS === 'ios') {
    const locale = typeof appStoreLocale === 'undefined' ? 'us' : appStoreLocale;

    return Linking.openURL(`https://itunes.apple.com/${ locale }/app/${ appStoreId }`)
  }

  return Linking.openURL(`https://play.google.com/store/apps/details?id=${ playStoreId }`);
};

export const openInBrowser = ({
  downloadLink,
}) => {
  return Linking.openURL(downloadLink);
};

export default {
  openOnDevice,
  openInStore,
  openInBrowser,
};
