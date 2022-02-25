import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(value: any): any {
    let result='';
    for (let index = 0; index < value.length; index++) {
      if (value[index] === 't') {
        result = result + value[index].replace('t', '*');
      } else {
        result = result + value[index];

      }
    }
    return result;
  }

}
