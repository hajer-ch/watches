import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateNaissance'
})
export class DateNaissancePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
