import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class CountryPageComponent implements OnInit {
  countryCode!: string | null;
  countryInfo: CountryInfo[] = [];
  countryName: string = '';
  currentYear: number = new Date().getFullYear();

  constructor(
    private activedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    this.activedRoute.paramMap
      .subscribe((res) => {
        this.countryCode = res.get('countryCode');
      })
      .unsubscribe();
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
