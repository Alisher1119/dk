import { Pipe, PipeTransform } from '@angular/core';
import {MAX_STRING_LENGTH} from "../constants/string.constant";

@Pipe({
    name: 'textFormat'
})
export class TextFromatPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value.length > MAX_STRING_LENGTH) {
          return `${value.substring(0, MAX_STRING_LENGTH)}...`;
        }
        return value;
    }
}
