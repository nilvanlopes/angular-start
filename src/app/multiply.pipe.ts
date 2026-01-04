import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiplyBy : number): unknown {
    return value * multiplyBy;
  }

}
