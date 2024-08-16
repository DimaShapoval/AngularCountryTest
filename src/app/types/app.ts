export interface SimpleCoutriesList {
  countryCode: string;
  name: string;
}

export interface HolidayCountry {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: true;
  counties: [string];
  launchYear: number;
  types: [string];
}

export interface CountryInfo {
  counties: string[];
  countryCode: string;
  date: string;
  fixed: boolean;
  global: boolean;
  launchYear: number;
  localName: string;
  name: string;
  types: string[];
}
