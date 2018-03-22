### VS-Number-Compare

#### Install:

yarn

```bash
yarn add @vivintsolar-oss/native-vs-number-compare
```

npm

```bash
npm install @vivintsolar-oss/native-vs-button
```

#### Usage

There are three components that make up the number compare: `Wrapper, Numbers, Legend`. The data for comparison should be passed into the Wrapper. The Legend and Number components allow you to specify which should be above and which should be below, along with allowing styling on those particular items.

```js
// Legend above
<VSNumberCompare.Wrapper>
	<VSNumberCompare.Legend />
	<VSNumberCompare.Numbers />
</VSNumberCompare.Wrapper>

// Legend below
<VSNumberCompare.Wrapper>
	<VSNumberCompare.Legend />
	<VSNumberCompare.Numbers />
</VSNumberCompare.Wrapper>
```

Simple values with style overrides

```js
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

<VSNumberCompare.Wrapper data={ values1 }>
	<VSNumberCompare.Legend
		style={{
			fontSize: 16,
			height: 16,
		}}
	/>
	<VSNumberCompare.Numbers
		style={{
			fontSize: 72,
			height: 72,
			paddingTop: 1,
		}}
	/>
</VSNumberCompare.Wrapper>
```

Specify colors on the individual values to style individual numbers

```js
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

<VSNumberCompare.Wrapper data={values}>
	<VSNumberCompare.Legend />
	<VSNumberCompare.Numbers />
</VSNumberCompare.Wrapper>
```
