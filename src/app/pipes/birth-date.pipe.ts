import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length == 14 && Number(value)) {
      let str = value.split('')
      return `${str[5]}${str[6]}/${str[3]}${str[4]}/${str[1]}${str[2]}`
    } else { return "not match" }
  }
 
}


