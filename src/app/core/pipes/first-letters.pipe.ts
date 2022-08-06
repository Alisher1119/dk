import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'firstLetters'
})

export class FirstLettersPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            const parts = value.split(' ').slice(0, 2);
            const result = [];
            for (const part of parts) {
                result.push(part.charAt(0).toUpperCase());
            }
            return result.join('');
        }
        return '';
    }
}
