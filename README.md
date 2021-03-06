# VSLR UI Kit for React Native

This project was bootstrapped with [CRNA](https://github.com/react-community/create-react-native-app), [Storybook](https://github.com/storybooks/storybook/tree/master/app/react-native), & [Lerna](https://lernajs.io/).

## [Packages list](https://github.com/vivintsolar-oss/react-native-components/tree/master/packages) 

## Getting Started

### Local Setup

* Install [X Code](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) then using `finder` you'll want to look for `simulator.app` & finally open it.
* Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman`
* Install dependencies via `yarn` or `npm`
* Run `yarn start` to launch the app

### Open on simulator
1. Run `yarn start`
    * Start the Expo DevTools and gives you a URL, e.g. http://localhost:19002
    * Starts the Storybook React and gives you a URL, e.g. http://localhost:7007
    * Starts the Expo app, usually you'll open it from the Expo DevTools
      * Alternately, you can run `yarn start ios` or `yarn start android` to immediately target a platform

## Debugging

The ideal development environment in React Native is using an actual device but for speed & debugging purposes a simulator is easiest. There's a couple tools that the community use but we're sticking with [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

* Install it via `brew cask install react-native-debugger` and that should be all you need
* Select your simulator & hit `Cmd-d` to open the expo [Developer Menu](https://docs.expo.io/versions/latest/guides/debugging.html#developer-menu)

The most useful feature of this menu are `Debug Remote JS` & `Toggle Element Inspector`.

We have a `postinstall` that runs [rndebbugger-open](https://www.npmjs.com/package/react-native-debugger-open). This makes it so that it launches the debugger you just installed in place of a Chrome tab when you [Debug Remotely](https://facebook.github.io/react-native/docs/debugging.html#chrome-developer-tools)

## Published Storybook

You can find the expo community app [here](https://expo.io/@vivintsolar/vslr-ui-kit) or if you already have [expo](https://expo.io/) installed on an android phone then scan the QR code down below 👇🏼

### READ THIS FIRST, PLEASE

The App Store version of the Expo iOS client recently had to remove the QR code scanner from the app. If you intend to load your app on a physical iOS device, please use exp send with exp, the “Send” button with XDE, or the "s" hotkey with create-react-native-app to send your project development URL to your phone by SMS or email.

Read more at https://blog.expo.io/upcoming-limitations-to-ios-expo-client-8076d01aee1a.

<img  alt="Expo QR Code" src="https://raw.githubusercontent.com/vivintsolar-oss/react-native-components/master/assets/QR.png" width="300" />

## Publishing
Run `yarn run publish --message 'chore: publish'` to publish package changes. 
* Commit linting requires the message follow the [conventional commit format](https://www.conventionalcommits.org/)
* This uses independent lerna versioning 
* It relies on conventional commit messages to
automatically bump any changed packages
* Updates changelogs for any published packages
* Publishes packages to npm and tarballs to github



_This is a [lerno](https://lernajs.io) monorepo.  Check out their documentation to understand how to publish, check for `changed` packages, etc._





## Contributing
When you're ready or have a need to contribute, take a look at the [contributing process](.github/CONTRIBUTING.md).