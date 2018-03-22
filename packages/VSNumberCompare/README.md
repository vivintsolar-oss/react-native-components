### VS-Number-Compare

#### Install:

yarn

```
yarn add @vivintsolar-oss/native-vs-number-compare
```

npm

```
npm install @vivintsolar-oss/native-vs-button
```

#### Usage

Property list and default values

```
title = 'Defaults',
values = [
  {
    unit: 'defs',
    value: 0,
    color: 'black',
  },
  {...},
],
legendPosition = 'bottom',
contrast = false,
fontMain = 'TradeGothicBold',
fontSecondary = 'TradeGothicThin',
fontSize = 72,
fontRatio = 4,
fontMinimum = 16,
numberSpacing = 1,
legendSpacing = 2,
```

Default settings

```
<VSNumberCompare />
```

Simple values

```
const values = [
  {
    unit: 'win',
    value: 12,
  },
  {
    unit: 'loss',
    value: 3,
  },
];

<VSNumberCompare
	values={ values }
	title="Welcome Calls"
	legendPosition="top"
	numberSpacing={ 15 }
	fontSize={ 42 }
	fontRatio={ 3 }
/>
```

Specify colors

```
const values = [
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

<VSNumberCompare
	values={ values }
	title="Weekly Average"
	legendPosition="bottom"
	contrast
/>
```

Specify font sizes, styles, and ratios

```
const values = [
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

<VSNumberCompare
	values={ values }
	title="Random Stuff"
	legendPosition="bottom"
	fontSize={ 54 }
	fontRatio={ 3 }
	legendSpacing={ 16 }
  fontMain="TradeGothicBold",
  fontSecondary="TradeGothicThin",
/>
```
