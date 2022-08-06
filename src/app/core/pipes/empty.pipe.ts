import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'empty'
})
export class EmptyPipe implements PipeTransform {
    transform(value): boolean {
        if ((typeof value) === 'object') {
            return value.length > 0;
        }
        return false;
    }
}
