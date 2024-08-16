import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, forkJoin, BehaviorSubject, Observable, tap, map } from 'rxjs';
import { CountryInfo, HolidayCountry, SimpleCoutriesList } from '../types/app';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = process.env['NG_APP_BASE_URL'];
  randomList: HolidayCountry[] = [];
  listOfAllCountriesSource: BehaviorSubject<SimpleCoutriesList[]> = new BehaviorSubject<SimpleCoutriesList[]>([]);
  listOfAllCountries$ = this.listOfAllCountriesSource.asObservable();

  constructor(private http: HttpClient) {}

  async getAllCountries(): Promise<any> {
    return this.listOfAllCountriesSource.next(await firstValueFrom(this.http.get<any>(`${this.apiUrl}/api/v3/AvailableCountries`)));
  }

  async getRandomCountries(): Promise<SimpleCoutriesList[]> {
    await this.getAllCountries();
    // take values from list of countries
    const allCountries = await firstValueFrom(this.listOfAllCountries$);
    // take random 3 countries
    const sortCoutries = [...allCountries].sort(() => 0.5 - Math.random()).slice(0, 3);
    return sortCoutries;
  }

  async getRandomHolidays(): Promise<HolidayCountry[]> {
    const countries = await this.getRandomCountries();
    // create links for requests to take info about holidays
    let countryCodeRequests = countries.map((item: SimpleCoutriesList) =>
      firstValueFrom(this.http.get(`${this.apiUrl}/api/v3/NextPublicHolidays/${item.countryCode}`))
    );

    // create 3 requests of info
    let arrayOfCountryInfo = await firstValueFrom(forkJoin(countryCodeRequests));
    // take first holiday in array of this country's holidays
    this.randomList = arrayOfCountryInfo.map((item: any) => item[0]);
    // add name of countries in object
    this.randomList = this.randomList.map((item: HolidayCountry, index: number) => {
      if (item.countryCode === countries[index].countryCode) {
        item.counties = [countries[index].name];
      }
      return item;
    });
    return this.randomList;
  }

  async getCountryHolidayInfo(countryCode: string, year: number = new Date().getFullYear()): Promise<CountryInfo[]> {
    return firstValueFrom(this.http.get<CountryInfo[]>(`${this.apiUrl}/api/v3/PublicHolidays/${year}/${countryCode}`));
  }

  async getNameOfCountry(inputCountryCode: string): Promise<any> {
    if (this.listOfAllCountriesSource.value.length === 0) {
      await this.getAllCountries();
    }
    let countries = this.listOfAllCountriesSource.value;
    let findName = countries.find(({ countryCode }) => countryCode === inputCountryCode)?.name;
    return findName;
  }
}
