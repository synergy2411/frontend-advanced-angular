import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(fruits: Array<string>, isAscending?: boolean): Array<string> {
    if (isAscending) {
      return fruits.sort();
    } else {
      return fruits.sort((a: string, b: string) => {
        if (a > b) {
          return -1
        } else if (b > a) {
          return 1
        } else {
          return 0
        }
      });
    }
  }

}
