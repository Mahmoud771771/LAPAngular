import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: number, args:number[]): number[] {
    return args.filter(num=>num==value);
  }

}
