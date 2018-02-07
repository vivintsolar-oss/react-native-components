# VSLR UI Kit for React Native

This project was bootstrapped with [CRNA](https://github.com/react-community/create-react-native-app), [Storybook](https://github.com/storybooks/storybook/tree/master/app/react-native), & [Lerna](https://lernajs.io/).

# Getting Started

## Local Setup

* Install [X Code](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) then using `finder` you'll want to look for `simulator.app` & finally open it.
* Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman`
* Install dependencies via `yarn` or `npm`
* Run `yarn start` to launch the app

### Open on simulator

If your simulator is open you should get a prompt to `Open in Expo`. Approve the prompt and it should launch expo which will open up to something like `exp://localhost:19000`. Otherwise when you run the start script it should launch your simulator and follow the same flow as explained above but sometimes it crashes before it completes so in that case just run it again with the simulator opened.

Also if you get an error that says something like `websocket:connection error` just dismess it and move on. It's a storybook issue.

### Open on device

To get it running on your device you can simply download the [Expo Client](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) and scan the qr code that's generated from running the start script. You can also run previous expo sessions that show up on their `Recently Visited` screen.

Also if you get an error that says something like `websocket:connection error` just dismess it and move on. It's a storybook issue.

## Debugging

The ideal development environment in React Native is using an actual device but for speed & debugging purposes a simulator is easiest. There's a couple tools that the community use but we're sticking with [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

* Install it via `brew cask install react-native-debugger` and that should be all you need
* Select your simulator & hit `Cmd-d` to open the expo [Developer Menu](https://docs.expo.io/versions/latest/guides/debugging.html#developer-menu)

The most useful feature of this menu are `Debug Remote JS` & `Toggle Element Inspector`.

We have a `postinstall` that runs [rndebbugger-open](https://www.npmjs.com/package/react-native-debugger-open). This makes it so that it launches the debugger you just installed in place of a Chrome tab when you [Debug Remotely](https://facebook.github.io/react-native/docs/debugging.html#chrome-developer-tools)

## Published Storybook

You can find the expo community app [here](https://expo.io/@vivintsolar/vslr-ui-kit) or if you already have [expo](https://expo.io/) installed on your phone then scan the QR code down below 👇🏼

<img  alt="Expo QR Code" src="https://raw.githubusercontent.com/vivintsolar-oss/react-native-components/master/assets/QR.png" width="300" />
