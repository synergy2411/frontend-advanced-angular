import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fruits: Array<string>, filteredFruits: string): Array<string> {
    if (filteredFruits === '') {
      return fruits
    } else {
      return fruits.filter(fruit => fruit.includes(filteredFruits));
    }
  }

}
