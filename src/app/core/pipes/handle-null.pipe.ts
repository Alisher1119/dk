import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'handleUndefined'
})

export class HandleNullPipe implements PipeTransform {
    transform(value: any, displayMessage?: string, ...args: any[]): string {
        const message = displayMessage || '';
        return value ? value : message;
    }
}
