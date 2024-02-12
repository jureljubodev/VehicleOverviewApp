import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'VehicleNamePipe',
})
export class VehicleNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return `${value.split(' ')[0]} ${value.split(' ')[1]}`;
  }
}
