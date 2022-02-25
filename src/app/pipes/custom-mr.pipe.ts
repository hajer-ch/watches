import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMr'
})
export class CustomMrPipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
}
