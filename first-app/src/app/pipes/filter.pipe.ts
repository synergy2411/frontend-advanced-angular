import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(fruits: Array<string>, filteredFruits: string): Array<string> {
    // console.log("[TRANSFORM]");
    if (filteredFruits === '') {
      return fruits
    } else {
      return fruits.filter(fruit => fruit.includes(filteredFruits));
    }
  }

}
