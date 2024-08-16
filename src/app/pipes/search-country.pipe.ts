import { Pipe, PipeTransform } from '@angular/core';
import { SimpleCoutriesList } from '../types/app';

@Pipe({
  name: 'searchCountry',
  standalone: true,
})
export class SearchCountryPipe implements PipeTransform {
  transform(value: SimpleCoutriesList[], searchValue: string): SimpleCoutriesList[] {
    return value.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
