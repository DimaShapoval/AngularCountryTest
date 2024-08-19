import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CountryInfo } from '../types/app';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit, OnDestroy {
  countryCode!: string | null;
  countryInfo: CountryInfo[] = [];
  countryName: string = '';
  currentYear: number = new Date().getFullYear();
  subscriber: any;

  constructor(
    private activedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  async ngOnInit() {
    this.subscriber = this.activedRoute.paramMap.subscribe((res) => {
      this.countryCode = res.get('countryCode');
    });
    if (this.countryCode) {
      this.countryName = await this.apiService.getNameOfCountry(this.countryCode);
      this.countryInfo = await this.apiService.getCountryHolidayInfo(this.countryCode, 2024);
    }
  }

  async navigationByYear(year: number) {
    if (year < 2020 || year > 2030) {
      return;
    }
    this.currentYear = year;
    if (this.countryCode) {
      this.countryInfo = await this.apiService.getCountryHolidayInfo(this.countryCode, year);
    }
  }
}
