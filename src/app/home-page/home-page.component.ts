import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { HolidayCountry, SimpleCoutriesList } from '../types/app';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchCountryPipe } from '../pipes/search-country.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchCountryPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  listOfCountries: Observable<SimpleCoutriesList[]> = this.apiService.listOfAllCountries$;
  searchValue: string = '';
  randomCountriesList!: HolidayCountry[];
  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.randomCountriesList = await this.apiService.getRandomHolidays();
  }
}
