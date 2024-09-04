
# @tm11/mmgeo

**@tm11/mmgeo** is a simple and comprehensive NPM package that provides geographic data for Myanmar, including states, districts, and townships. The data is available in both English and Myanmar languages, making it useful for localization purposes.

## Features

- Retrieve Myanmar's states, districts, and townships in both English and Myanmar.
- Object-oriented API for easy access to geographical data.
- Simple configuration for switching between languages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Get States](#get-states)
  - [Get Districts by State](#get-districts-by-state)
  - [Get Townships by District and State](#get-townships-by-district-and-state)
  - [Language Configuration](#language-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using NPM:

```bash
npm install @tm11/mmgeo
```

Or with Yarn:

```bash
yarn add @tm11/mmgeo
```

## Usage

### Importing the package

Once installed, you can import and use the package in your project:

```ts
import { getStates, getDistrictsByState, getTownshipsByDistrict, initialize } from '@tm11/mmgeo';
```

### Get States

Retrieve a list of all states in Myanmar:

```ts
const states = getStates();
console.log(states);

// Output: 
// [
//   { name: 'Yangon', lat: 16.8661, lng: 96.1951, capital: 'Yangon' },
//   { name: 'Mandalay', lat: 21.9162, lng: 96.0891, capital: 'Mandalay' },
//   ...
// ]
```

### Get Districts by State

You can retrieve the districts within a state by passing the state name:

```ts
const districts = getDistrictsByState('Yangon');
console.log(districts);

// Output:
// [{ name: 'Yangon East' }, { name: 'Yangon West' }, ...]
```

### Get Townships by District and State

To get the townships for a specific district within a state:

```ts
const townships = getTownshipsByDistrict('Yangon', 'Yangon East');
console.log(townships);

// Output:
// [{ name: 'Thingangyun' }, { name: 'South Okkalapa' }, ...]
```

### Language Configuration

By default, the data is returned in English. You can easily switch to Myanmar language using the `initialize` function:

```ts
initialize({ language: 'mm' });  // Switch to Myanmar language
const statesInMyanmar = getStates();
console.log(statesInMyanmar);

// Output in Myanmar language:
// [
//   { name: 'ရန်ကုန်', lat: 16.8661, lng: 96.1951, capital: 'ရန်ကုန်' },
//   { name: 'မန္တလေး', lat: 21.9162, lng: 96.0891, capital: 'မန္တလေး' },
//   ...
// ]

// You can switch back to English by calling:
initialize({ language: 'eng' });
```

### Full Example

```ts
import { getStates, getDistrictsByState, getTownshipsByDistrict, initialize } from '@tm11/mmgeo';

// Get states in English
let states = getStates();
console.log(states);

// Switch to Myanmar language
initialize({ language: 'mm' });

// Get states in Myanmar
states = getStates();
console.log(states);

// Get districts in Yangon
const districts = getDistrictsByState('ရန်ကုန်');
console.log(districts);

// Get townships in Yangon East district
const townships = getTownshipsByDistrict('ရန်ကုန်', 'ရန်ကုန်အရှေ့ပိုင်း');
console.log(townships);
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork this repository.
2. Create a branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

## License

This package is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.
