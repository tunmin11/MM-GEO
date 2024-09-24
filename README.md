
# @tm11/mmgeo

**@tm11/mmgeo** is a simple and comprehensive NPM package that provides geographic data for Myanmar, including states, districts, and townships. The data is available in both English and Myanmar languages, making it useful for localization purposes.

## Features

- Retrieve Myanmar's states, districts, and townships in both English and Myanmar.
- Object-oriented API for easy access to geographical data.
- Simple configuration for switching between languages.

## Installation

You can install this package using NPM:

```bash
npm install @tm11/mmgeo
```

Or with Yarn:

```bash
yarn add @tm11/mmgeo
```


[![NPM Version](https://img.shields.io/npm/v/@tm11/mmgeo.svg)](https://www.npmjs.com/package/@tm11/mmgeo) [![NPM Downloads](https://img.shields.io/npm/dt/@tm11/mmgeo.svg)](https://www.npmjs.com/package/@tm11/mmgeo)

## Usage

### 1. Retrieving States

To retrieve all the states in the dataset, you can use the `getStates()` function. This will return an array of state objects.

#### State Object Structure

Each state object has the following structure:

```ts
export interface State {
  eng: string;
  mm: string;
  lat: number;
  lng: number;
  capital: string;
  districts: District[];
}
```

- `eng`: Name of the state in English.
- `mm`: Name of the state in Myanmar language.
- `lat`: Latitude of the state.
- `lng`: Longitude of the state.
- `capital`: Capital of the state.
- `districts`: An array of District objects within the state.

### 2. Language Configuration

You can configure the language for the geographic data using the `initialize()` function. The package supports two languages:

- `'en'` for English (default)
- `'mm'` for Myanmar

Example:

```ts
import { initialize, getStates } from '@tm11/mmgeo';

// Initialize in Myanmar language
initialize({ language: 'mm' });

// Get states in Myanmar
const statesInMyanmar = getStates();
console.log(statesInMyanmar);
```

You can switch back to English by calling:

```ts
initialize({ language: 'en' });
```

### 3. Retrieving Districts and Townships

Similarly, the State object contains `districts`, which are arrays of District objects, and each District contains `townships`.

#### District Object Structure

```ts
export interface District {
  eng: string;
  mm: string;
  townships: Township[];
}
```

- `eng`: Name of the district in English.
- `mm`: Name of the district in Myanmar.
- `townships`: An array of Township objects within the district.

#### Township Object Structure

```ts
export interface Township {
  eng: string;
  mm: string;
}
```

- `eng`: Name of the township in English.
- `mm`: Name of the township in Myanmar.

Both District and Township objects come with a `getName()` function, which returns the name based on the currently initialized language setting.

## License

This package is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.
