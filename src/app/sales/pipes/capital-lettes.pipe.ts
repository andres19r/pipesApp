import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters',
})
export class CapitalLettersPipe implements PipeTransform {
  transform(_value: string, inUppercase: boolean = true): string {
    return inUppercase ? _value.toUpperCase() : _value.toLowerCase();
  }
}
