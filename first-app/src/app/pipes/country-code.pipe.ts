import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: unknown, code?: string): unknown {
    switch (code) {
      case "USA": return "+1 " + value;
      case "AUS": return "+12 " + value;
      case "SIN": return "+23 " + value;
      default: return "+91 " + value;
    }
  }

}

// Create another pipe "reverse" which will reverse the value
