import { InterfaceProducts } from './../models/interface-products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: string[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: string[] = list.filter((el: string) => {
      return el.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}

