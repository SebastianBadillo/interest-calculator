import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToUsd',
  standalone: true
})
export class NumberToUsdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
