import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'handleUndefined'
})

export class HandleUndefinedPipe implements PipeTransform {
    transform(value: any, displayMessage?: string, ...args): string {
        const message = displayMessage || '(not set)';
        return value ? value : message;
    }
}
