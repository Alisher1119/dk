import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countDisplay'
})
export class CountDisplayPipe implements PipeTransform {
    transform(value: any): string {
        if (value) {
            return `(${value})`;
        }
        return '';
    }
}
