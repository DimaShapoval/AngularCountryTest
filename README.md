# AngularConutryTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## For launch the project

( If you use Angular at first run this command in terminal `npm install -g @angular/cli@17` )
1. **Open terminal like Node.js promt or terminal in VScode** 
2. **Enter this command: `git clone https://github.com/DimaShapoval/AngularCountryTest.git`**
3. **Next step in terminal: `cd AngularCountryTest`**
4. **Download all packages: `npm install` or  `npm i`**
5. **Run project: `npm start`**
6. **Open link that terminal sent (usually it's `http://localhost:4200/`)**

## Build project

( If you don't install packges run this command in terminal `npm install` or `npm i` )
1. **In terminal run command `npm run build`**

## Architecture

### Overview

This application is a front-end web application designed to provide a responsive and user-friendly interface. It interacts with external APIs to fetch and display data. The application use Bootstrap for styling and layout, ensuring a consistent and attractive design across different devices.

### Key Components

1. **Frontend**
   - **Framework**: Angular
   - **Key Libraries**: 
     - **Bootstrap**: Used for responsive layout and styling.

2. **API Integration**
   - **Description**: The application communicates with external APIs to retrieve data. It sends HTTP requests and processes the responses to update the user interface.
   - **Key Operations**: 
     - **GET Requests**: To fetch data from APIs.

3. **User Interface**
   - **Components**: 
     - **Layouts**: Managed using Bootstrap's grid system to create responsive and flexible layouts.
     - **Components**: Angular components for building reusable UI elements, such as headers, main.
     - **Styling**: Custom CSS in conjunction with Bootstrap for styling.

4. **Routing**
   - **Description**: Angular Router is used to manage navigation and routing within the application. It handles URL changes and displays the appropriate components based on the route.
   - **Key Features**: 
     - **Route Definitions**: Configured in Angular's routing module.

5. **State Management**
   - **Description**: Manages application state to ensure a consistent user experience. Can be handled using Angular services or third-party libraries if necessary.
   - **Key Tools**: 
   - **Angular Services**: For sharing data and state across components.

## Features

The `ApiService` class provides methods for interacting with the backend API to manage and retrieve data related to countries and public holidays. It handles API requests and updates the application's data.

### Methods

#### `getAllCountries()`

Fetches a list of all countries and updates the data store.

- **Returns**: `Promise<void>`
- **Usage**: Call this method to get the list of countries. This is used into other methods to get countries data is up-to-date.

#### `getRandomCountries()`

Get a list of 3 random countries from the list of countries.

- **Returns**: `Promise<SimpleCoutriesList[]>`
- **Usage**: Call this method to get a random 3 countries. This is useful for scenarios where you need to display 3 random countries.

#### `getRandomHolidays()`

Get holiday information for the randomly selected countries from getRandomCountries() method.

- **Returns**: `Promise<HolidayCountry[]>`
- **Usage**: Call this method after `getRandomCountries()` to get holiday data for the randomly selected countries. It returns an array of holiday information for 3 random countries.

#### `getCountryHolidayInfo(countryCode: string, year: number = new Date().getFullYear()): Promise<CountryInfo[]>`

Get public holiday information for a specified country and year.

- **Parameters**:
  - `countryCode` (string): The ISO code of the country.
  - `year` (number): The year for which to retrieve holiday information (default is current year).
- **Returns**: `Promise<CountryInfo[]>`
- **Usage**: Call this method to get holiday information for a concrete country and year.

#### `getNameOfCountry(inputCountryCode: string): Promise<any>`

Finds and returns the name of a country based on ISO code.

- **Parameters**:
  - `inputCountryCode` (string): The ISO code of the country.
- **Returns**: `Promise<any>`
- **Usage**: Call this method to take the name of a concrete country in CountryPage. It's created to displayed name of country bottom of header

## Additional Libraries
1. **Bootstrap**
2. **ngx-env**

## Configurated VScode

1. **Check your `.eslintrc.json` and `.prettierrc` it's should be in project**
2. **Download two extensions for VScode:**
   - `https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`
   - `https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode`
3. **Check your VSCode settings:**
   - Steps: click `File` -> `Preferences` -> `Settings`
   - In json file might be `"editor.formatOnSave": true,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }`
( If not, add it in your file ) 
5. **Format your code after changing use Ctrl+A -> Ctrl+K -> Ctrl+F**
