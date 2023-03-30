import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length == 16) {
      let str = value.split('')
      return `${str[0]}${str[1]}${str[2]}${str[3]}-${str[4]}${str[5]}${str[6]}${str[7]}-${str[8]}${str[9]}${str[10]}${str[11]}-${str[12]}${str[13]}${str[14]}${str[15]}`

    } else { return "not match" }
  }

}
