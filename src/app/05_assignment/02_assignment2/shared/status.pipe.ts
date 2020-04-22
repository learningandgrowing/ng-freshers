import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {
  transform(value: boolean) {
    let transformed: string;
    if (value) {
      transformed = '<strong>YES</strong>';
    } else {
      transformed = '<span>NO</span>';
    }
    return transformed;
  }
}
