import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fruits: Array<string>, filteredFruits: string): Array<string> {
    return fruits.filter(fruit => fruit.includes(filteredFruits));
  }

}
