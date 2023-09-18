import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../modules/car';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filtertext: string): Car[] {
     filtertext= filtertext?filtertext.toLocaleLowerCase():
    ""
    return filtertext?value.filter((c:Car)=>c.carName.toLocaleLowerCase()
    .indexOf(filtertext)!==-1):value;
  }

}
