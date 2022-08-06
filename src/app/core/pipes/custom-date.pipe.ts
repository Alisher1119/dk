import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
    public moment: any = moment;

    transform(value: any, ...args): string {
        if (value) {
            return moment(value).format('DD/MM/YYYY HH:mm');
        }
        return '-';
    }
}
